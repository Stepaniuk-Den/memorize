import "./layout.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Loader from "../loader/Loader";
import { Suspense, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setHomePageHeight, setHomePageWidth } from "../../redux/quizSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const targetRef = useRef();

  useEffect(() => {
    if (!targetRef.current) return;
    dispatch(setHomePageWidth(targetRef.current.offsetWidth)),
      dispatch(setHomePageHeight(targetRef.current.offsetHeight));
  }, [dispatch]);

  return (
    <div className="layout">
      <Header />
      <div className="container" ref={targetRef}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
