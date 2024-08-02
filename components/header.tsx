import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="w-full border-0 py-4 lg:px-24 px -10 bg-gray-950">
      <h1 className="text-3xl text-white">
        <Link href="/">Dewey Jewelry Co.</Link>
        <div>Upload</div>;
      </h1>
    </nav>
  );
}
