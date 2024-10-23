import React, { ElementType } from 'react';
import IconElement from '../IconElement/IconElement';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  icon: ElementType;
  label: string;
  to?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to }) => {
  return (
    <NavLink to={to ?? ''}>
      <div className="flex items-center flex-col">
        <IconElement icon={icon} className='w-6 h-6 my-2' />
        <span>{label}</span>
      </div>
    </NavLink>
  );
};

export default NavItem;
