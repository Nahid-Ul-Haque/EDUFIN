import connect from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";

import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { username, registrationNumber, password, gender } = reqBody;

    console.log(reqBody);

    //check if user already exists
    const user = await User.findOne({ registrationNumber });

    if (user) {
      return res.json({ error: "User already exists" }, { status: 400 });
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      registrationNumber,
      password: hashedPassword,
      gender,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    //send verification email

    // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
