import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import BackTop from "./BackTop";
import Whatsapp from "./Whatsapp";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <BackTop /> */}
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Layout;
