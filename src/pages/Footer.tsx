import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GrSystem } from "react-icons/gr";
import IconElement from '../components/IconElement/IconElement';
import { CpuSetting, LogoutCurve, User } from 'iconsax-react';


const Footer: React.FC = () => {
  const navigate = useNavigate()

  const handleLogOut = ()=>{
    navigate('/login')
  }



  return (
    <footer className="h-18 bg-white fixed bottom-0 right-0 z-50 w-full">
      <div className="container mx-auto text-center">
        <ul className="flex items-center justify-around border-t-gray-100">
          <li className='text-sm text-black flex flex-col justify-center items-center'>
          <IconElement icon={User} className='w-6 h-6 my-2'/>
          <Link to='/users'>کاربران</Link>

          </li>
          <li className='text-sm text-black'>
          <IconElement icon={GrSystem} className='w-6 h-6 my-2'/>
          <Link to='/systems'>سیستم ها</Link>
          </li>

          <li className='text-xs text-black'>
          <IconElement icon={CpuSetting} className='w-6 h-6 my-2'/>
          <Link to='/sub-systems'>ساب سیستم ها</Link>
          </li>
          <li className='text-sm text-black' onClick={handleLogOut}>
          <IconElement icon={LogoutCurve} className='w-6 h-6 my-2'/>
          <p>خروج</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
