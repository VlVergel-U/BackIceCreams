import { user } from '../models/user.model.js'
import bcrypt from 'bcrypt';

export const createAdmin = async () => {
    try {
      const adminFound = await user.findOne();

      if (adminFound) {
        console.log("Admin ya creado anteriormente :)")
        return;
      } 

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash("user1234", salt);

      console.log("Admin creado :)")

      const adminRegistered = await user.create({
        username: "user1234",
        password: hashedPassword,
      });
      
    } catch (error) {
      console.error(error);
    }
  };