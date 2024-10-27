import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import Users from "./pages/Users";
import Systems from "./pages/Systems";
import SubSystems from "./pages/SubSystems";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="users" element={<Users />} />
            <Route path="systems" element={<Systems />} />
            <Route path="sub-systems/:systemId" element={<SubSystems />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
