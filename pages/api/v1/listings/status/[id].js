import { listings as Listing } from '../../../../../models';

export default async (req, res) => {
  switch (req.method) {
    case 'PUT':
      await updateListingStatus(req, res);
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

const updateListingStatus = async (req, res) => {
  const { status } = req.query;
  try {
    const listing = await Listing.findByPk(req.query.id);

    if (listing.status === 'active') {
      listing.status = 'pending';

      await listing.save();
      const updatedListing = await Listing.findAll({
        where: {
          status: status,
        },
        order: [['createdAt', 'DESC']],
      });
      res.json(updatedListing);
    } else if (listing.status === 'pending') {
      listing.status = 'active';

      await listing.save();
      const updatedListing = await Listing.findAll({
        where: {
          status: status,
        },
        order: [['createdAt', 'DESC']],
      });

      const activeListings = await Listing.findAll({
        where: {
          status: 'active',
        },
        order: [['createdAt', 'DESC']],
      });
      
      const pendingListings = await Listing.findAll({
        where: {
          status: 'pending',
        },
        order: [['createdAt', 'DESC']],
      });

      res.json({ updatedListing, activeListings,pendingListings });
    } else {
      res.status(404);

      throw new Error('Listing not found');
    }
  } catch (error) {
    res.status(500).send('Error');
  }
};
