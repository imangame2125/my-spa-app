import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/Header';
import Footer from '../../pages/Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
      <main className="flex-grow mx-4">
        <Outlet />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In soluta laudantium consequuntur ducimus architecto debitis alias porro esse fugiat facere voluptas blanditiis, natus exercitationem mollitia assumenda ex, molestias, vel sunt!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi beatae ipsam totam voluptatum quod aspernatur molestias, aliquam dolores nihil amet error ratione natus alias? Maxime aliquid quae eum nesciunt!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ut et provident possimus beatae velit quidem iusto eveniet quae ullam consequatur sint atque quibusdam, dicta, nobis voluptas dolore fuga necessitatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum repellat tempora qui. Natus dolores mollitia numquam, quod, non quasi odit perspiciatis repudiandae dolor hic, autem debitis aspernatur iusto animi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sapiente dignissimos. Nam tempore, ullam possimus quis eos mollitia nostrum? Labore laborum modi a corporis mollitia eveniet deserunt vitae iste ducimus!
      </main>
        <Footer/>
    </div>
  );
};

export default Layout;
