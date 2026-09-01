"use client"


import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {


const pathName = usePathname()



  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
       

        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyApp
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          <Link href="/" className={`${pathName=="/" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
            Home
          </Link>
          <Link href="/about" className={`${pathName=="/about" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
            About
          </Link>
          <Link href="/products" className={`${pathName=="/products" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
            Products
          </Link>
          <Link href="/contact" className={`${pathName=="/contact" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
            Contact
          </Link>
        </div>

        {/* Button */}
        <Link
          href="/login"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
