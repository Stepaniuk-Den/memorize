import "./layout.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Loader from "../loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="container">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
