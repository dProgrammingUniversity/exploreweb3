import jwt from 'jsonwebtoken';
import { listings as Listing } from '../../../../models';
import { users as User } from '../../../../models';

export default async (req, res) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).json({ message: 'No autorization token' });
  }

  switch (req.method) {
    case 'GET':
      await getActiveListings(req, res);
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

const getActiveListings = async (req, res) => {
  const { userId } = jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET
  );

  try {
    const user = await User.findOne({
      where: { id: userId },
    });

    if (user.role === 'admin') {

      const listings = await Listing.findAll({
        order: [['createdAt', 'DESC']],
      });

      return res.send({ listings });

    } else {

      const listings = await Listing.findAll({
        where: {
          userId: userId,
        },
        order: [['createdAt', 'DESC']],
      });

      return res.send({ listings });
    }

  } catch (error) {
    res.status(500).send('Error in finding Listings, please try again!');
  }
};
