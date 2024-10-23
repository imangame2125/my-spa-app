import React from 'react';
import {  useNavigate } from 'react-router-dom';
import IconElement from '../IconElement/IconElement';
import { GrSystem } from "react-icons/gr";
import { CpuSetting, LogoutCurve, User } from 'iconsax-react';
import NavItem from './NavItem';
import { t } from 'i18next';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate('/login');
  };

  return (
    <nav className="h-18 bg-white fixed bottom-0 right-0 z-50 w-full border-t border-gray-200 shadow-md">
      <div className="container mx-auto text-center">
        <ul className="flex items-center justify-around border-t-gray-100">
          <NavItem icon={User} label={t('users')} to="/users" />
          <NavItem icon={GrSystem} label={t('systems')}to="/systems" />
          <NavItem icon={CpuSetting} label={t('subsystems')} to="/sub-systems" />
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
