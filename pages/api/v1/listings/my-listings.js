import jwt from 'jsonwebtoken';
import { listings as Listing } from '../../../../models';
import { users as User } from '../../../../models';

export default async (req, res) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).json({ message: 'No autorization token' });
  }

  switch (req.method) {
    case 'GET':
      await getListings(req, res);
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

const getListings = async (req, res) => {
  const { userId } = jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET
  );
  const { page, limit, status } = req.query;

  //pagination
  const pageNumber = parseInt(page);
  const getRealNumber = isNaN(pageNumber) ? 0 : pageNumber;
  const postsOffset = limit * (getRealNumber - 1);

  try {
    const user = await User.findOne({
      where: { id: userId },
    });

    let totalListing = 0
    let listings = []
    let activeListings = 0
    let pendingListings = 0

    // Count listing for admin
    if (user.role === 'admin') {
        activeListings = await Listing.count({
            where: {
              status: 'active',
            },
        });
    
        pendingListings = await Listing.count({
            where: {
              status: 'pending',
            },
        });
    } else {
        activeListings = await Listing.count({
            where: {
              status: 'active',
              userId: userId,
            },
        });
    
        pendingListings = await Listing.count({
            where: {
              status: 'pending',
              userId: userId,
            },
        });
    }


    if (user.role === 'admin') {
        totalListing = await Listing.count({
        where: {
          status: status,
        },
      });
      listings = await Listing.findAll({
        order: [['createdAt', 'DESC']],
        offset: postsOffset,
        limit,
        where: {
          status: status,
        },
      });
      
    } else {
    totalListing = await Listing.count({
        where: {
          userId: userId,
          status: status,
        },
      });
      listings = await Listing.findAll({
        where: {
          userId: userId,
          status: status,
        },
        order: [['createdAt', 'DESC']],
        offset: postsOffset,
        limit,
      });
    }

    const totalPages = Math.ceil(totalListing / limit);
    // console.log('############=>', totalListing)
    return res.send({ listings, totalPages, activeListings, pendingListings });


  } catch (error) {
    res.status(500).send('Error in finding Listings, please try again!');
  }
};
