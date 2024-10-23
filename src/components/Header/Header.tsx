import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assests/images/logo-logo.png";
import { t } from "i18next";

const Header: FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };
  return (
    <header className="py-2 rounded-lg w-full fixed top-0 bg-blue-950 flex items-center">
      <div className=" flex items-center mx-4 w-full justify-between">
        <nav className="flex items-center">
          <Link to="/"></Link>
          <img
            onClick={handleNavigateHome}
            src={Image}
            alt=""
            className="w-10 h-10"
          />
        </nav>
        <p className="text-nowrap text-white font-bold text-sm">{t("aboutUs")}</p>
      </div>
    </header>
  );
};

export default Header;
