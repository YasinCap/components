import React from "react";
import Link from "next/link";

export default function Navbar() {
  function add(a, b) {
    return a - b;
  }
  return (
    <nav className="flex space-x-7 py-4">
      <img className="w-20 h-12" src="https://i.imgur.com/6r1X7bF.png" />

      <Link
        className="hover:text-[#081453] rounded transition duration-300 ease-in-out"
        href="/"
      >
        <p className="test"></p>
        <p
          data-testid="navbarTitle"
          className="text-2xl font-bold text-grey-800 hover:text-[#081453]"
        >
          Gemeente Rotterbosch
        </p>
      </Link>
    </nav>
  );
}
