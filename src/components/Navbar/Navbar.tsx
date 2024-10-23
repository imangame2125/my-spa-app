import React from 'react';
import {  useNavigate } from 'react-router-dom';
import IconElement from '../IconElement/IconElement';
import { GrSystem } from "react-icons/gr";
import { CpuSetting, LogoutCurve, User } from 'iconsax-react';
import NavItem from './NavItem';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate('/login');
  };

  return (
    <nav className="h-18 bg-white fixed bottom-0 right-0 z-50 w-full">
      <div className="container mx-auto text-center">
        <ul className="flex items-center justify-around border-t-gray-100">
          <NavItem icon={User} label="کاربران" to="/users" />
          <NavItem icon={GrSystem} label="سیستم ها" to="/systems" />
          <NavItem icon={CpuSetting} label="ساب سیستم ها" to="/sub-systems" />
          <li className='text-sm text-black' onClick={handleLogOut}>
            <IconElement icon={LogoutCurve} className='w-6 h-6 my-2' />
            <p>خروج</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
