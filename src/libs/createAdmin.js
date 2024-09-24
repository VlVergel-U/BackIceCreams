import { user } from '../models/user.model.js'

export const createAdmin = async () => {
    try {
      const adminFound = await user.findOne();
      if (adminFound) return;
  
      const adminRegistered = await user.create({
        username: "user",
        password: "U-123456",
      });
      
      console.log("ID: " + adminFound.username);
    } catch (error) {
      console.error(error);
    }
  };