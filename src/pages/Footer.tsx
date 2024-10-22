import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <ul className="flex items-center justify-around">
          <li>
          <Link to='/users'>کاربران</Link>
          </li>
          <li>
          <Link to='/systems'>سیستم ها</Link>
          </li>

          <li>
          <Link to='/sub-systems'>ساب سیستم ها</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
