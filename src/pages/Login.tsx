import React, { FC, useState } from "react";
import Logo from "../../src/assests/images/login.png";
import {User} from 'iconsax-react'
import { useNavigate } from "react-router-dom";
import IconElement from '../components/IconElement/IconElement';

const LoginPage: FC = () => {
const navigate  = useNavigate()
  

  const mockUsers = [
    { name: "iman", password: "1234", icon: <IconElement icon={User} className="w-10 h-10"/> },
    { name: "john", password: "doe123", icon: <IconElement icon={User} className="w-10 h-10"/> },
    { name: "jane", password: "doe456", icon:<IconElement icon={User} className="w-10 h-10"/> }
  ];
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredUsername = username.toLowerCase();
    const enteredPassword = password;
  
    const user = mockUsers.find(user => user.name.toLowerCase() === enteredUsername);
  
    if (user && user.password === enteredPassword) {
      navigate('/')
      console.log("Login successful for user:", user.name);
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <section className=" min-h-screen flex items-center justify-center flex-col">
      <div className="w-full flex mb-20 justify-center">
        <img src={Logo} alt="logo" className="w-full  rounded-lg" />
      </div>
      <p className="text-base font-normal mb-4">
        .به سامانه احراز هویت راین خوش آمدید
      </p>
      <div className="rounded-lg shadow-md">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="نام کاربری"
            className="peer my-2 h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="رمز عبور"
            className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          />
      </div>

      <div className="mt-4 w-full">
        <button onClick={handleSubmit} className="col-span-2  w-full rounded-lg px-4 py-2 bg-gray-700 text-green-100 hover:bg-green-800 duration-300">
          ورود
        </button>
      </div>
    </section>
  );
};

export default LoginPage;



