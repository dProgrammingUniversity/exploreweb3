import jwt from 'jsonwebtoken';
import { listings as Listing } from '../../../../models';
import { users as User } from '../../../../models';

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getListing(req, res);
      break;

    case 'DELETE':
      await deleteListing(req, res);
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

const getListing = async (req, res) => {
  try {
    const listing = await Listing.findByPk(req.query.id);
    res.json(listing);
  } catch (error) {
    res.status(500).send('Error in gettng single Listing, please try again!');
  }
};

const deleteListing = async (req, res) => {
  const { status, id } = req.query;
  const { userId } = jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET
  );
  try {
    const user = await User.findOne({
      where: { id: userId },
    });

    await Listing.destroy({
      where: {
        id: id,
      },
    });

    if (user.role === 'admin') {

      const adminListings = await Listing.findAll({
        order: [['createdAt', 'DESC']],
        where: {
          status: status,
        },
        limit: 6,
      });

      const adminActiveListings = await Listing.findAll({
        order: [['createdAt', 'DESC']],
        where: {
          status: 'active',
        },
      });
      const adminPendingListings = await Listing.findAll({
        order: [['createdAt', 'DESC']],
        where: {
          status: 'pending',
        },
      });
      return res.status(200).json({
        message: 'Successfully Deleted',
        adminListings,
        adminActiveListings,
        adminPendingListings,
      });
    } else {
      const listings = await Listing.findAll({
        order: [['createdAt', 'DESC']],
        where: {
          status: status,
          userId:userId
        },
        limit: 6,
      });

      const activeListings = await Listing.findAll({
        order: [['createdAt', 'DESC']],
        where: {
          status: 'active',
          userId: userId,
        },
      });
      const pendingListings = await Listing.findAll({
        order: [['createdAt', 'DESC']],
        where: {
          status: 'pending',
          userId: userId,
        },
      });
      return res.status(200).json({
        message: 'Successfully Deleted',
        listings,
        activeListings,
        pendingListings,
      });
    }
  } catch (error) {
    res.status(500).send('Error in deleting listing, please try again!');
  }
};
