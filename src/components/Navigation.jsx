import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="w-full">
      <div className="container-custom py-12">
        <div className="flex items-center space-x-8 text-lg">
          <Link to="/" className="text-white hover:text-gray-300">
            home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            about
          </Link>
          <Link to="/projects" className="text-white hover:text-gray-300">
            projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;