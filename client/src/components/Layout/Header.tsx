import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
                Routine
              </Link>
            </div>
            <nav className="ml-6 flex space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-800"
              >
                대시보드
              </Link>
              <Link
                to="/routines"
                className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-800"
              >
                루틴 관리
              </Link>
              <Link
                to="/statistics"
                className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-800"
              >
                통계
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 