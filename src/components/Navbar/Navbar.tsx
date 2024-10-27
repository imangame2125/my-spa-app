import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { GrSystem } from "react-icons/gr";
import { CpuSetting, User } from "iconsax-react";
import NavItem from "./NavItem";
import { t } from "i18next";

const Navbar: FC = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("authToken");  
    navigate("/login");  
  };

  return (
    <nav className="h-18 bg-white fixed bottom-0 right-0 z-50 w-full border-t border-gray-200 shadow-md">
      <div className="container mx-auto text-center">
        <ul className="flex items-center justify-around border-t-gray-100">
          <div>
           
            <p  onClick={handleLogOut} className="text-sm border-t-2 my-1 border-gray-100">
              {t("exit")}
            </p>
          </div>
          <NavItem icon={GrSystem} label={t("systems")} to="/systems" />
          <NavItem
            icon={CpuSetting}
            label={t("subsystems")}
            to="/sub-systems"
          />
          <NavItem icon={User} label={t("users")} to="/users" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
