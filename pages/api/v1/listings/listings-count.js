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

  try {

    const activeListings = await Listing.findAll({
      where: {
        userId: userId,
        status: 'active',
      },
      order: [['createdAt', 'DESC']],
    });

    const pendingListings = await Listing.findAll({
        where: {
          userId: userId,
          status: 'pending',
        },
        order: [['createdAt', 'DESC']],
      });
  


    return res.send({ activeListings,pendingListings  });
  } catch (error) {
    res.status(500).send('Error in finding Listings, please try again!');
  }
};
