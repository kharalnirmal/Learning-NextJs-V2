import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //getting cookies
  const cookiesStore = await cookies(); // get cookie store
  const theme = cookiesStore.get("theme"); // read specific cookie
  console.log(theme);
  //!when using cookiesstore
  cookiesStore.set("laptop", "victus");

  //!setting the cookie using header
  //   return new Response("setting cookies", {
  //     headers: {
  //       "Set-Cookies": "theme=dark", //cookies should be in key= value pair
  //     },
  //   });
  return NextResponse.json({
    message: "cookies set",
  });
}
