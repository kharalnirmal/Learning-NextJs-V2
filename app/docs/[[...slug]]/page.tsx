import React from "react";

const page = ({ params }: { params: { slug: string[] } }) => {
  return <div>hey{params.slug?.join("/")}</div>;
};

export default page;

// 🔖 Slug (Next.js)

// A slug is a dynamic part of the URL that changes based on data.
// In Next.js, slugs are created using square brackets in folder names.

// app/
//  └── blog/
//      └── [slug]/
//          └── page.tsx   // /blog/react, /blog/nextjs

// [slug] captures the value from the URL and lets one page handle many routes.
