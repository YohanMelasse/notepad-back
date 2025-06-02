import { Note } from "./notes";
import { User } from "./user";

// User can have multiple notes, if user doesn't exists notes couldn't be created.
User.hasMany(Note,{
  as: "notes"
});

// One note belongs to one user
Note.belongsTo(User,{
  as: "users",
  foreignKey: "user_id"
});


export {Note, User};
