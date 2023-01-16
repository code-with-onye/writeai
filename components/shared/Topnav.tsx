import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Topnav = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 w-full">
        <Logo />
        <div className="flex items-center">
          <Link
            href="tel:5541251234"
            className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
          >
            (555) 412-1234
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Topnav;
