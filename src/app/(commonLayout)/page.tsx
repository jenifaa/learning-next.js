import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to MyApp</h1>
      <Link  href="/dashboard">
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}
