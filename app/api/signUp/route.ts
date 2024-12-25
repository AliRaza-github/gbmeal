import { NextResponse } from "next/server";
import User from "../model/UserModel";
import connectDb from "@/app/utils/connectDb";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    await connectDb();
    const selectedOptions = await request.json();
    console.log("......", selectedOptions);
    
    const {
      name,
      email,
      password,
      preferredMeal: prefMeal,
      Person: person,
      FoodAllergies: foodAllergies,
      calories,
      dislike: FoodDislike,
      mealPerDay,
      days,
    } = selectedOptions;

    const hashPass = await bcrypt.hash(password, 10);
    
    const user = new User({
      name,
      email,
      password: hashPass,
      prefMeal,
      person,
      foodAllergies,
      calories,
      FoodDislike,
      mealPerDay,
      days,
    });

    await user.save();
    return NextResponse.json({ error: null, data: user }, { status: 200 });
  } catch (error) {
    console.error("Failed to create a user.", error);
    return NextResponse.json(
      { error: "Internal server error in user creation" },
      { status: 500 }
    );
  }
}