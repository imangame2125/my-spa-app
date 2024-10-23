import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assests/images/logo-logo.png";

const Header: FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };
  return (
    <header className="py-2 rounded-lg w-full fixed top-0">
      <div className=" flex justify-between items-center mx-4  flex-row-reverse">
        <nav className="flex items-center gap-x-2">
          <Link to="/"></Link>
          <img
            onClick={handleNavigateHome}
            src={Image}
            alt=""
            className="w-10 h-10"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
