import React from 'react';
import { Link } from "react-router-dom";

const Navbar= () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Saylani Microfinance
      </Link>
      <div className="space-x-4">
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Register</Link>
      </div>
    </nav>
  );
}
export default Navbar;