import {  DataTypes, 
          Model, 
          InferAttributes,
          Optional
        } from "sequelize";
import { sequelize } from "../database/database";

type UserAttribute = {
  id: number,
  lastname: string,
  firstname: string,
  email: string,
  username: string,
  password: string,
  created_at: Date
}

type UserCreationAttribute = Optional<UserAttribute, "created_at">
class User extends Model <UserAttribute, UserCreationAttribute> {
  declare id: number;
  declare lastname: string;
  declare firstname: string;
  declare email: string;
  declare username: string;
  declare password: string;
  declare created_at: Date;
};



// Note model creation , instance of Model.

User.init({
  id : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  lastname: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  firstname : {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email : {
    type : DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  username : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: true,
  tableName: "users"
});

export {User};