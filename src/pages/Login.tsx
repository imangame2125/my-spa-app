import React, { FC, FormEvent, useState } from "react";
import Logo from "../../src/assests/images/login.png";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/auth/auth-extra-reducers";
import { AppDispatch, RootState } from "../store/store";

const LoginPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [mobile, setMobile] = useState(""); 
    const [password, setPassword] = useState("");

    useSelector((state: RootState) => state.auth.currentUser);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        await dispatch(userLogin({ mobile, password }));

        const token = localStorage.getItem("authToken");
        if (token) {
            navigate("/", { state: { loggedIn: true } });
        }
    };

    return (
        <section className="min-h-screen flex w-full h-full xl:overflow-hidden">
            <div className="flex md:w-1/2 flex-col w-full h-full xl:flex-col items-center justify-center mx-4 lg:w-1/2">
                <div className="w-full flex mb-20 justify-center xl:w-82 lg:w-72 sm:w-72">
                    <img src={Logo} alt="logo" className="w-full rounded-lg" />
                </div>
                <p className="text-base font-normal mb-4">{t('welcome')}</p>


                <div className="rounded-lg shadow-md w-full lg:mx-auto xl:mx-auto sm:mx-auto lg:w-96">
                    <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)} 
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

                <div className="mt-4 w-full sm:mx-auto lg:w-96">
                    <button
                    className="h-12 w-full rounded-lg px-4 py-2 bg-[#629584] text-green-100 hover:bg-[#243642] duration-300"
                        onClick={handleSubmit}
                    >
                    {t('enter')}
                    </button>
                </div>
            </div>
            <div className="w-1/2 py-4 justify-center bg-[#243642] px-4 hidden lg:flex">
                <p className="text-2xl font-normal text-white">{t('aboutRaynSystem')}</p>
            </div>
        </section>
    );
};

export default LoginPage;
