import React from 'react';

const HomePage: React.FC = () => {
  return (
    <section className="py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">به سامانه احراز هویت راین خوش آمدید</h1>
      <p className="mb-4">راین سیستم</p>
      <ul className="space-y-2">
        <li><a href="/users" className="text-blue-600 hover:text-blue-700">کاربران</a></li>
        <li><a href="/systems" className="text-blue-600 hover:text-blue-700">سیستم ها</a></li>
        <li><a href="/sub-systems" className="text-blue-600 hover:text-blue-700">ساب سیتم ها</a></li>
      </ul>
    </section>
  );
};

export default HomePage;
