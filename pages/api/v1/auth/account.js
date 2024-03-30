import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isLength from 'validator/lib/isLength';
import { users as User } from '../../../../models';
import { agents as Agent } from '../../../../models';

export default async (req, res) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).json({ message: 'No autorization token' });
  }
  switch (req.method) {
    case 'POST':
      await handlePostRequest(req, res);
      break;
    case 'GET':
      await handleGetRequest(req, res);
      break;
    case 'PUT':
      await handlePutRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
  }
};

const handlePostRequest = async (req, res) => {
  const { currentPassword, newPassword, newConfirmPassword } = req.body;
  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    // check email, name, password format
    if (!currentPassword) {
      return res
        .status(422)
        .send({ message: 'Must be provide current Password!' });
    } else if (!isLength(newPassword, { min: 6, max: 12 })) {
      return res
        .status(422)
        .send({ message: 'New Password must be 6-12 characters long!' });
    } else if (newPassword != newConfirmPassword) {
      return res
        .status(422)
        .json({ message: "Confirm password doesn't matched!" });
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 10);

    const user = await User.findOne({
      attributes: ['password'],
      where: { id: userId },
    });

    const match = await bcrypt.compare(currentPassword, user.password);

    if (!match) {
      return res
        .status(422)
        .send({ message: "Current Password doesn't match!" });
    }

    await User.update(
      {
        password: newPasswordHash,
      },
      {
        where: { id: userId },
      }
    );

    res.status(200).json({ message: 'Successfully updated the password!' });
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

const handlePutRequest = async (req, res) => {
  const {
    avatar,
    name,
    email,
    phoneNumber,
    website,
    address,
    bio,
    fbUrl,
    twtUrl,
    linkUrl,
    insUrl,
  } = req.body;
  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    // const newPasswordHash = await bcrypt.hash(password, 10);

    await User.update(
      {
        avatar,
        name,
        email,
        phoneNumber,
        website,
        address,
        bio,
        fbUrl,
        twtUrl,
        linkUrl,
        insUrl,
      },
      {
        where: { id: userId },
      }
    );

    res.status(200).json({ message: 'Successfully updated the profile!' });
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

const handleGetRequest = async (req, res) => {
  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    const { agentId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    if(userId){

      const user = await User.findOne({
        attributes: {
          exclude: ['password'],
        },
        where: { id: userId },
      });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).send('User not found');
      }
    }else{
      const agent = await Agent.findOne({
        attributes: {
          exclude: ['password'],
        },
        where: { id: agentId },
      });
      if (agent) {
        res.status(200).json(agent);
      } else {
        res.status(404).send('Agent not found');
      }
    }
  } catch (error) {
    res.status(403).send('Invalid token');
  }
};
