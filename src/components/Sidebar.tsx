import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-900 text-white">
      {/* Logo */}
      <div className="border-b border-gray-700 p-6">
        <h1 className="text-2xl font-bold">MyApp</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col p-4">
        <Link
          href="/dashboard"
          className="rounded-lg px-4 py-3 hover:bg-gray-800"
        >
          Dashboard
        </Link>

        <Link
          href="/profile"
          className="rounded-lg px-4 py-3 hover:bg-gray-800"
        >
          Profile
        </Link>

        <Link
          href="/users"
          className="rounded-lg px-4 py-3 hover:bg-gray-800"
        >
          Users
        </Link>

        <Link
          href="/settings"
          className="rounded-lg px-4 py-3 hover:bg-gray-800"
        >
          Settings
        </Link>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 w-64 border-t border-gray-700 p-4">
        <Link
          href="/logout"
          className="block rounded-lg px-4 py-3 text-red-400 hover:bg-red-500 hover:text-white"
        >
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;