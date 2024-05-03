import React from "react";
import "./scss/main.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./router/home/Home";
import Admin from "./router/admin/Admin";
import Login from "./router/login/Login";
import SingleRoute from "./router/singleRoute/SingleRoute";
import NotFound from "./router/not-found/NotFound";

import { Route, Routes } from "react-router-dom";
import Auth from "./router/auth/Auth";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/product/:id" element={<SingleRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
