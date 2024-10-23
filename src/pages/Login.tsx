import React, { FC, useState } from "react";
import Logo from "../../src/assests/images/login.png";
// import LoginBackground from "../../src/assests/images/backround-login.png";
import { User } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import IconElement from "../components/IconElement/IconElement";
import { t } from "i18next";

const LoginPage: FC = () => {
  const navigate = useNavigate();

  const mockUsers = [
    {
      name: "iman",
      password: "1234",
      icon: <IconElement icon={User} className="w-10 h-10" />,
    },
    {
      name: "ali",
      password: "12345",
      icon: <IconElement icon={User} className="w-10 h-10" />,
    },
    {
      name: "nader",
      password: "1234567",
      icon: <IconElement icon={User} className="w-10 h-10" />,
    },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredUsername = username.toLowerCase();
    const enteredPassword = password;

    const user = mockUsers.find(
      (user) => user.name.toLowerCase() === enteredUsername
    );

    if (user && user.password === enteredPassword) {
      navigate("/");
      console.log("Login successful for user:", user.name);
    } else {
      console.log("Invalid credentials");
    }
  };
  return (
    <section className="min-h-screen flex w-full h-full xl:overflow-hidden">
      <div className="flex md:w-1/2 flex-col w-full h-full xl:flex-col items-center justify-center mx-4 lg:w-1/2  lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div className="w-full flex mb-20 justify-center xl:w-82 lg:w-72 sm:w-72">
          <img src={Logo} alt="logo" className="w-full  rounded-lg" />
        </div>
        <p className="text-base font-normal mb-4">
         {t('welcome')} 
        </p>

        <div className="rounded-lg shadow-md w-full lg:mx-auto xl:mx-auto sm:mx-auto lg:w-96 xl:w-96 md:w-80">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={t('userName')}
            className="peer my-2 h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('password')}
            className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mt-4 w-full sm:mx-auto lg:w-96 xl:w-96 md:w-80">
          <button
            onClick={handleSubmit}
            className="col-span-2 h-12 w-full rounded-lg px-4 py-2 bg-[#629584] text-green-100 hover:bg-[#243642]duration-300"
          >
            {t('enter')}
          </button>
        </div>
      </div>
      <div className="w-1/2  py-4 justify-center bg-[#243642] px-4 hidden lg:flex md:flex md:w-1/2 xl:w-1/2 lg:mx-auto">
        <p className="text-2xl font-normal text-white">
          {t('aboutRaynSystem')}
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
