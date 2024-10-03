import { user } from '../models/user.model.js'

export const createAdmin = async () => {
    try {
      const adminFound = await user.findOne();
      if (adminFound) return;
  
      const adminRegistered = await user.create({
        username: "user1234",
        password: "user1234",
      });
      
      console.log("ID: " + adminFound.username);
    } catch (error) {
      console.error(error);
    }
  };