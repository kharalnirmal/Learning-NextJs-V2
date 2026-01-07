import { NextResponse } from "next/server";
import users from "./data";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const userId = Number(id);
    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
      return NextResponse.json({
        success: false,
        message: "unable to delete",
      });
    }
    users.splice(userIndex, 1); //splice (index,deletecount) first index ma euta delete means tai index ko dlete
    return NextResponse.json({
      success: true,
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "unable to delete",
    });
  }
}
