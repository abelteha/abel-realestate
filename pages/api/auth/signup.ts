import { hashPassword } from "@/lib/hash-pass";
import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req:NextApiRequest,res:NextApiResponse){
    if(req.method !== "POST"){
        return;
    }
    const data = req.body;
    const { email, password } = data;
    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 5
    ) {
      res.status(422).json({ message: "Invalid email or password" });
      return;
    }

     const client = await MongoClient.connect(
       "mongodb+srv://abelteha:5BwPTBYYRmYNJUtY@cluster0.kirsjvh.mongodb.net/auth?retryWrites=true&w=majority"
     );
     const db = client.db();
     const existingUser = await db
       .collection("clients")
       .findOne({ email: email });
     if (existingUser) {
       res.status(422).json({ message: "User already exists" });
       return;
     }
    const hashedPassword = await hashPassword(password);
    const result = await db
      .collection("clients")
      .insertOne({ email, password: hashedPassword });
    res.status(201).json({ message: "User Created!" });
    client.close();
}