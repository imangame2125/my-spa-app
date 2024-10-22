import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import Users from './pages/Users';
import Systems from './pages/Systems';
import SubSystems from './pages/SubSystems';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/systems" element={<Systems />} />
            <Route path="/sub-systems" element={<SubSystems />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;