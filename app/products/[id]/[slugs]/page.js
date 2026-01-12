"use client";

import { useParams } from "next/navigation";
import React from "react";

const productidslug = () => {
  const params = useParams();
  console.log(params);
  return <div>productidslug</div>;
};

export default productidslug;
