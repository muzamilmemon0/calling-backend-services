import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 ">
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link to="/add" className="mr-4">
        Add New Post
      </Link>
      <Link to="/posts" className="mr-4">
        Posts
      </Link>
    </nav>
  );
}

export default Navbar;
