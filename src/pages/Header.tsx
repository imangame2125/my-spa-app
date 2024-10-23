import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../src/assests/images/logo-logo.png'

const Header: FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = ()=>{
    navigate('/')
  }
  return (
    <header className="bg-blue-600 text-white py-2 rounded-lg	w-full fixed top-0">
      <div className=" flex justify-between items-center mx-4">
        <Link onClick={handleNavigateHome} to="/" className="text-lg font-bold">درباره ما</Link>
        <nav className="flex items-center gap-x-2">
          <Link to="/"></Link>
         <img src={Image} alt="" className='w-10 h-10' />
        </nav>
      </div>
    </header>
  );
};

export default Header;
  