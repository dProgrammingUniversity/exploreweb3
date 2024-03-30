import jwt from "jsonwebtoken";
import { listings as Listing } from "../../../../models";
import { users as User } from "../../../../models";
import isLength from "validator/lib/isLength";
const { Op } = require("sequelize");

export default async (req, res) => {
	switch (req.method) {
		case "GET":
			await getListings(req, res);
			break;

		case "POST":
			await createListings(req, res);
			break;

		case "PUT":
			await updateListings(req, res);
			break;

		default:
			res.status(405).send(`Method ${req.method} not allowed`);
			break;
	}
};

const createListings = async (req, res) => {
	const {
		listingTitle,
		category,
		keyword,
		city,
		address,
		state,
		gallery,
		description,
		email,
		website,
		phone,
		facebook,
		twitter,
		linkedin,
		facilities,
		openingTime,
		closingTime,
		pricing,
	} = req.body;

	try {
		const { userId } = jwt.verify(
			req.headers.authorization,
			process.env.JWT_SECRET
		);

		if (!isLength(listingTitle, { min: 3 })) {
			return res
				.status(422)
				.send("The title should be a minimum of Three characters long");
		} else if (!category) {
			return res.status(422).send("Category required");
		} else if (!keyword) {
			return res.status(422).send("keyword required");
		} else if (!city) {
			return res.status(422).send("city required");
		} else if (!address) {
			return res.status(422).send("address required");
		} else if (!state) {
			return res.status(422).send("state required");
		} else if (!description) {
			return res.status(422).send("description required");
		} else if (!openingTime) {
			return res.status(422).send("openingTime info required");
		} else if (!closingTime) {
			return res.status(422).send("closingTime required");
		} else if (!pricing) {
			return res.status(422).send("pricing required");
		}

		await Listing.create({
			userId,
			listingTitle,
			category,
			keyword,
			city,
			address,
			state,
			gallery,
			description,
			email,
			website,
			phone,
			facebook,
			twitter,
			linkedin,
			facilities,
			openingTime,
			closingTime,
			pricing,
		});

		const pendingListings = await Listing.findAll({
			order: [["createdAt", "DESC"]],
			where: {
				status: "pending",
				userId: userId,
			},
		});

		const adminPendingListings = await Listing.findAll({
			order: [["createdAt", "DESC"]],
			where: {
				status: "pending",
			},
		});

		res.status(200).json({ pendingListings, adminPendingListings });
	} catch (error) {
		// console.error(error);
		res.status(500).send("Error in creating Deal, please try again!");
	}
};

const updateListings = async (req, res) => {
	const {
		id,
		listingTitle,
		category,
		keyword,
		city,
		address,
		state,
		gallery,
		description,
		email,
		website,
		phone,
		facebook,
		twitter,
		linkedin,
		facilities,
		openingTime,
		closingTime,
		pricing,
	} = req.body;

	try {
		const { userId } = jwt.verify(
			req.headers.authorization,
			process.env.JWT_SECRET
		);
		const user = await User.findOne({
			where: { id: userId },
		});

		let listing = await Listing.findByPk(id);

		await listing.update({
			id,
			listingTitle,
			category,
			keyword,
			city,
			address,
			state,
			gallery,
			description,
			email,
			website,
			phone,
			facebook,
			twitter,
			linkedin,
			facilities,
			openingTime,
			closingTime,
			pricing,
		});

		if (user.role === "admin") {
			const listings = await Listing.findAll({
				order: [["createdAt", "DESC"]],
				where: {
					status: "active",
				},
				limit: 6,
			});
			res.status(200).json({
				message: "Successfully updated the listings!",
				listings,
			});
		} else {
			const listings = await Listing.findAll({
				order: [["createdAt", "DESC"]],
				where: {
					status: "active",
					userId: userId,
				},
				limit: 6,
			});
			res.status(200).json({
				message: "Successfully updated the listings!",
				listings,
			});
		}
	} catch (error) {
		res.status(403).json({ message: "Invalid token" });
	}
};

const getListings = async (req, res) => {
	const { page, limit, keyword, title, location, category } = req.query;

	//search
	const searchKeyword = keyword ? keyword : "";
	const searchTitle = title ? title : "";
	const searchLocation = location ? location : "";
	const searchCategory = category ? category : "";

	//pagination
	const pageNumber = parseInt(page);
	const getRealNumber = isNaN(pageNumber) ? 0 : pageNumber;
	const postsOffset = limit * (getRealNumber - 1);

	console.log(searchTitle, searchLocation);

	try {
		let totalListing, listings;
		if (searchKeyword) {
			totalListing = await Listing.count({
				where: {
					listingTitle: { [Op.iLike]: `%${searchKeyword}%` },
					status: "active",
				},
			});
			listings = await Listing.findAll({
				where: {
					listingTitle: { [Op.iLike]: `%${searchKeyword}%` },
					status: "active",
				},
				order: [["createdAt", "DESC"]],
				offset: postsOffset,
				limit,
			});
		} else if (searchTitle) {
			totalListing = await Listing.count({
				where: {
					listingTitle: { [Op.iLike]: `%${searchTitle}%` },
					status: "active",
				},
			});
			listings = await Listing.findAll({
				where: {
					listingTitle: { [Op.iLike]: `%${searchTitle}%` },
					status: "active",
				},
				order: [["createdAt", "DESC"]],
				offset: postsOffset,
				limit,
			});
		} else if (searchTitle && searchLocation) {
			totalListing = await Listing.count({
				where: {
					listingTitle: { [Op.iLike]: `%${searchTitle}%` },
					city: { [Op.iLike]: `%${searchLocation}%` },
					status: "active",
				},
			});
			listings = await Listing.findAll({
				where: {
					listingTitle: { [Op.iLike]: `%${searchTitle}%` },
					city: { [Op.iLike]: `%${searchLocation}%` },
					status: "active",
				},
				order: [["createdAt", "DESC"]],
				offset: postsOffset,
				limit,
			});
		} else if (searchTitle && searchLocation && searchCategory) {
			totalListing = await Listing.count({
				where: {
					listingTitle: { [Op.iLike]: `%${searchTitle}%` },
					city: { [Op.iLike]: `%${searchLocation}%` },
					category: { [Op.iLike]: `%${searchCategory}%` },
					status: "active",
				},
			});
			listings = await Listing.findAll({
				where: {
					listingTitle: { [Op.iLike]: `%${searchTitle}%` },
					city: { [Op.iLike]: `%${searchLocation}%` },
					category: { [Op.iLike]: `%${searchCategory}%` },
					status: "active",
				},
				order: [["createdAt", "DESC"]],
				offset: postsOffset,
				limit,
			});
		} else {
			totalListing = await Listing.count({
				where: {
					status: "active",
				},
			});
			listings = await Listing.findAll({
				where: {
					status: "active",
				},
				order: [["createdAt", "DESC"]],
				offset: postsOffset,
				limit,
			});
		}

		const totalPages = Math.ceil(totalListing / limit);
		res.send({ listings, totalPages });
	} catch (error) {
		res.status(500).send("Error in finding Listings, please try again!");
	}
};
