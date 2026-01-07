import { NextResponse } from "next/server";

const Users = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    age: 24,
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Nisha Verma",
    email: "nisha.verma@example.com",
    age: 27,
    role: "UI/UX Designer",
  },
  {
    id: 3,
    name: "Rohit Mehta",
    email: "rohit.mehta@example.com",
    age: 29,
    role: "Backend Developer",
  },
  {
    id: 4,
    name: "Priya Kapoor",
    email: "priya.kapoor@example.com",
    age: 26,
    role: "Product Manager",
  },
  {
    id: 5,
    name: "Kunal Singh",
    email: "kunal.singh@example.com",
    age: 31,
    role: "DevOps Engineer",
  },
];
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const userId = Number(id);
    const user = Users.find((u) => u.id === userId);
    if (user) {
      return NextResponse.json({
        success: true,
        date: user,
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "couldnt find the user",
    });
  }
}
