import {  DataTypes, 
          Model, 
          DateDataType, 
          InferAttributes, 
          IntegerDataType, 
          StringDataType, 
          TextDataType } from "sequelize";
import { sequelize } from "../database/database";

class User extends Model<InferAttributes<User>> {
  declare id: IntegerDataType;
  declare lastname: StringDataType;
  declare firstname: StringDataType;
  declare email: StringDataType;
  declare username: StringDataType;
  declare password: TextDataType;
  declare created_at: DateDataType;
  declare updated_at: DateDataType;
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
  },
  updated_at: {
    type: DataTypes.DATE, 
    allowNull: false
  }
}, {
  sequelize,
  timestamps: true,
  tableName: "users"
});

export {User};