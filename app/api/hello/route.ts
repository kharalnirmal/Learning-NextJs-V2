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

export default Users;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const age = searchParams.get("age");
    console.log(name, age);

    return NextResponse.json({
      Users,
      queryParams: { name, age },
    });
  } catch (error) {
    return NextResponse.json({
      error: "failed",
    });
  }
}
