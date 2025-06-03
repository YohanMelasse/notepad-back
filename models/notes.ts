import { Model, 
        DataTypes, 
        Optional, 
        } from "sequelize";
import { sequelize } from "../database/database";

type NoteCreationAttribute = {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}

type NoteAttribute = Optional<NoteCreationAttribute, "created_at"  |  "updated_at">
// Note model creation , instance of Model.

class Note extends Model<NoteAttribute> {
  declare id: string;
  declare title: string;
  declare content: string;
  declare created_at: Date;
  declare updated_at: Date;
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