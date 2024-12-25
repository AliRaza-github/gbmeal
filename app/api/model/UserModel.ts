import { model, models, Schema } from "mongoose";
import mongoose from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  prefMeal: string;
  person: string;
  foodAllergies: string;
  calories: string;
  FoodDislike: string;
  mealPerDay: string;
  days: string;
  createdAt: Date;
}
const UserSchema = new Schema<IUser>({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  person: {
    type: String,
  },
  prefMeal: {
    type: String,
  },
  foodAllergies: {
    type: String,
  },
  calories: {
    type: String,
  },
  FoodDislike: {
    type: String,
  },
  mealPerDay: {
    type: String,
  },
  days: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = models.User || model<IUser>("User", UserSchema);
export default User;
