

import {Request, Response, NextFunction } from "express-serve-static-core";
import { User } from "../../models/associations";
import { BadRequest } from "../../utils/customErrors";
import bcrypt from "bcrypt";

const registerController = {
  register: async (req: Request, res: Response, next: NextFunction) => {
    
    const {id} = req.params;
    const {lastname, firstname, email, username, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      id: Number(id),
      lastname: lastname,
      firstname: firstname,
      email: email,
      username: username,
      password: hashedPassword
    })

    if (!createdUser){
      return next (new BadRequest("La création de l'utilisateur a échouée"));
    };

    res.json({
      createdUser,
      message: "Utilisateur créé avec succès. \n Vous allez être redirigé."
    })
  }
}

export {registerController};