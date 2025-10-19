import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Link href="/project/list" className="mb-6 text-blue-600 underline">
        project list
      </Link>
      <h1>Hello, Next.js!</h1>
      <p>Welcome to your Next.js application.</p>
      
    </main>
  );
}