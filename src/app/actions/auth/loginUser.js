"use server";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { compare } from "bcryptjs";

export const loginUser = async (payload) => {
  const { email, password } = payload;
  const userCollection = dbConnect(collectionNamesObj.usersCollection);
  const user = await userCollection.findOne({ email });
  if (!user) {
    return null;
  }
  //   No Use of Bcrypt of compare
  //   just use the password from the user
  if (user.password !== password) {
    return null;
  }
  return user;
};
