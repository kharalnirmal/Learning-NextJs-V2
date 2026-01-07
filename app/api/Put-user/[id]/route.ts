import { NextResponse } from "next/server";
import users from "./data";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const userId = Number(id);

    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
      return NextResponse.json({
        success: false,
        error: "user index not found",
      });
    }

    const { name, email, age, role } = await request.json();

    if (!name || !email || !age || !role) {
      return NextResponse.json(
        {
          sucess: false,
          error: "Name ,Email and age is must required",
        },
        { status: 400 }
      );
    }

    users[userIndex] = {
      id: userId,
      name: name,
      email: email,
      age: age,
      role: role,
    };

    return NextResponse.json({
      success: true,
      users,
    });
  } catch (error) {
    return NextResponse.json(
      {
        sucess: false,
        error: "didnt matched",
      },
      { status: 500 }
    );
  }
}
