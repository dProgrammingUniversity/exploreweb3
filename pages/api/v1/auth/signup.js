import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import { users as User } from '../../../../models';



export default async (req, res) => {


  let { name, email, password, confirmPassword } = req.body;
  try {
    if (!isLength(name, { min: 3 })) {
      return res
        .status(422)
        .send('The name should be a minimum of Three characters long');
    } else if (!isEmail(email)) {
      return res.status(422).send('Email should be a valid email address');
    } else if (!isLength(password, { min: 6 })) {
      return res
        .status(422)
        .send('Password should be minimum of Six characters long');
    } else if (password != confirmPassword) {
      return res.status(422).send("Password doesn't match");
    }

    // Check if user with that email if already exists
    const user = await User.findOne({
      where: { email: email },
    });

    if (user) {
      return res.status(422).send(`User already exist with email ${email}`);
    }

    // Encrypt password with bcrypt
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: passwordHash
    });

    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(201).send(token);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error in account signup. Please try again.');
  }
};
