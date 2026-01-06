import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center bg-white h-screen text-black">
      <div className="flex justify-center items-center gap-8">
        <Image
          src={"/undraw_page-not-found_6wni.svg"}
          alt="Not-found Image"
          height={300}
          width={300}
          style={{ color: "white" }}
        />
        <span className="bg-gray-500 rounded-3xl w-[3px] h-30"></span>
        <h1 className="text-4xl">Not Found Sorry Bro</h1>
      </div>
      <Link
        href={"/"}
        className="bg-teal-400 mt-3 px-5 py-2 rounded-4xl hover:scale-105 active:scale-95"
      >
        Return Home
      </Link>
    </div>
  );
}
