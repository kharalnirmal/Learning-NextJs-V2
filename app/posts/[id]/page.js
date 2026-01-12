import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  if (parseInt(id) > 10) {
    return notFound();
  }
  return <div>review:{id}</div>;
};

export default page;
