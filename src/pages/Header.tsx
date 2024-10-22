import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconElement from '../IconElement/IconElement';
import { ReactComponent as Logo } from '../../public/assests/images/RhineLogoWhite.png'


const Header: FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = ()=>{
    navigate('/')
  }
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className=" flex justify-between items-center mx-4">
        <Link onClick={handleNavigateHome} to="/" className="text-lg font-bold">راین سیستم</Link>
        <nav className="flex items-center gap-x-2">
          <IconElement icon={Logo}/>
          <Link to="/"></Link>
          <Link to="/login">ثبت نام</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
  