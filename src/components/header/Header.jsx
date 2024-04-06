import { useState } from "react";
import "./header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { IoSettingsSharp } from "react-icons/io5";
import Links from "./links/Links";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsModalOpen,
  selectUserName,
} from "../../redux/selectors";
import { logoutThunk } from "../../redux/Auth/authThunk";
import { toggleModal } from "../../redux/Auth/authSlice";
import ModalSettings from "../modalSettings/ModalSettings";

const Header = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const isAuth = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserName);
  const isModalOpen = useSelector(selectIsModalOpen);

  const [exitIsOpen, setExitIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  const toggle = () => {
    if (!isAuth) return;
    dispatch(toggleModal());
  };

  const toggleExit = () => {
    setExitIsOpen(!exitIsOpen);
  };

  const backdropClick = (evt) => {
    if (evt.target === evt.currentTarget) setExitIsOpen(!exitIsOpen);
  };

  const CallBack = (childData) => {
    return setOpen(childData);
  };
  return (
    <div className="header">
      <div className="header__burger burger">
        <div className={`burger__menu ${open ? "burger__menu--open" : ""}`}>
          <Links lang={"en"} handleCallBack={CallBack} />
        </div>
        <Button
          onClick={() => setOpen((prev) => !prev)}
          className="burger__btn"
          text={!open ? <RxHamburgerMenu /> : <RxCross1 />}
        ></Button>
      </div>
      <div className="header__user">
        <p>
          Hi,<span> {user ? user : "   Anonymous"} !</span>
        </p>
        <button className="settings" onClick={toggle}>
          <IoSettingsSharp />
        </button>
        <div className="logoutContainer">
          <Button text="Logout" onClick={toggleExit}></Button>
          {exitIsOpen && (
            <div className="modalOverlay" onClick={backdropClick}>
              <div className="modal">
                <p>Do you want to logout?</p>
                <Button
                  text="Yes"
                  onClick={handleLogout}
                  className="exitBtn"
                ></Button>
                <Button
                  text="No"
                  onClick={toggleExit}
                  className="exitBtn"
                ></Button>
              </div>
            </div>
          )}
        </div>
        {isModalOpen && <ModalSettings />}
      </div>
    </div>
  );
};

export default Header;
