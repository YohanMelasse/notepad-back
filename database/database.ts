import { Dialect, Sequelize} from "sequelize";

const db_username = process.env.DB_USER as string;
const db_name = process.env.DB_NAME as string;
const db_password = process.env.DB_PASS as string;
const db_host = process.env.DB_HOST as string;
const db_dialect = process.env.DB_DIALECT as Dialect;

// init new instance of sequelize 
const sequelize = new Sequelize(db_username, db_name, db_password,{
  host: db_host,
  dialect: db_dialect,
  logging: false, 
  define: {
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updates_at",
    underscored: true
  }
});

export {sequelize};