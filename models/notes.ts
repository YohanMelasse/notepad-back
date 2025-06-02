import { Model, DataTypes, DateDataType, IntegerDataType, TextDataType, InferAttributes, StringDataType } from "sequelize";
import { sequelize } from "../database/database";

// Note model creation , instance of Model.

class Note extends Model<InferAttributes<Note>> {
  declare id: IntegerDataType;
  declare title: StringDataType;
  declare content: TextDataType;
  declare created_at: DateDataType;
  declare updated_at: DateDataType;
};

Note.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title : {
    type : DataTypes.INTEGER,
    allowNull: false
  },
  content : {
    type: DataTypes.TEXT,
    allowNull: false
  },
  created_at : {
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
  tableName: "notes"
});

export {Note};