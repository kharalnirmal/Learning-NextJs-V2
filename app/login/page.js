"use client";

import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const handleButton = () => {
    router.replace("/products");
  };
  return (
    <div>
      <button onClick={handleButton}>ProductsPage</button>
    </div>
  );
};

export default page;
