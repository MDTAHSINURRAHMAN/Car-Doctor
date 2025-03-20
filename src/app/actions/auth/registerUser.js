"use server";
import dbConnect from "@/lib/dbConnect";
import { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNamesObj.usersCollection);

  // Vallidation
  const { email, password } = payload;
  if (!email || !password) {
    return { error: "All fields are required" };
  }
  const user = await userCollection.findOne({ email: email });
  if (user) {
    return { error: "User already exists" };
  }
  const result = await userCollection.insertOne(payload);
  return {
    acknowledged: result.acknowledged,
    insertedId: result.insertedId.toString(), // Convert ObjectId to string
  };
};
