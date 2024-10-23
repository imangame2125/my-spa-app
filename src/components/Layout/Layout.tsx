import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../pages/Header'
import Footer from '../../pages/Footer'

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      <Header />
      <main className="mx-4 mt-16 overflow-y-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
