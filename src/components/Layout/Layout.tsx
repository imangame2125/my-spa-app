// src/components/Layout/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="mx-4 mt-16 overflow-y-auto">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
};

export default Layout;
