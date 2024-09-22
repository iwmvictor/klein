import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import BackTop from "./BackTop";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <BackTop />
      <Footer />
    </>
  );
}

export default Layout;
