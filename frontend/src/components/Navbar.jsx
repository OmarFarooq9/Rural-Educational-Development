import React from 'react';

const Navbar = () => {
  return (
    <nav className="border-b-2 border-gray-200 py-2.5 px-[200px] bg-purple-50">
      <div className="container flex items-center justify-between">
        {/* Logo Section */}
        <h1>RuralEdu.</h1>
        {/* Links Section */}
        <div className="flex space-x-8">
          <div to='/' className="text-xl font-bold text-gray-900 hover:bg-green-300 px-3 py-2 rounded-lg cursor-pointer">Home</div>
          <div className="text-xl font-bold text-gray-900 hover:bg-green-300 px-3 py-2 rounded-lg">Resources</div>
          <div className="text-xl font-bold text-gray-900 hover:bg-green-300 px-3 py-2 rounded-lg">About</div>
          <div className="text-xl font-bold text-gray-900 hover:bg-green-300 px-3 py-2 rounded-lg">Contact Us</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
