import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const headerRequest = new Headers(request.headers);
  const authHeader = headerRequest.get("Authorization");
  console.log(authHeader);
  console.log("nirmal");

  return NextResponse.json({
    status: true,
    message: "this is working",
    auth: authHeader,
  });
}
