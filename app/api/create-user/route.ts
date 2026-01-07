import { error } from "console";
import { NextResponse } from "next/server";
type users = {
  id: number;
  name: string;
  email: string;
  age: number;
};
const users: users[] = [];

export async function POST(request: Request) {
  try {
    console.log(request);
    const { name, email, age } = await request.json();

    if (!name || !email || !age) {
      return NextResponse.json(
        {
          sucess: false,
          error: "Name ,Email and age is must required",
        },
        { status: 400 }
      );
    }

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return NextResponse.json(
        {
          sucess: false,
          error: "users mail already exist try diff one",
        },
        { status: 400 }
      );
    }
    const newUser = {
      id: 5,
      name: "nirmal Singh",
      email: "kunal.singh@example.com",
      age: 31,
    };
    users.push(newUser);

    return NextResponse.json(
      {
        sucess: true,
        date: users,
        message: "user Created0",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        sucess: false,
        error: "user not created",
      },
      { status: 500 }
    );
  }
}
