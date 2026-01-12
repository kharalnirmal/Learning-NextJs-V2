"use client";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const search = useSearchParams();
  console.log(search);
  const firstName = search.get("q");
  console.log(firstName);
  return <div>SearchPage</div>;
};

export default SearchPage;
