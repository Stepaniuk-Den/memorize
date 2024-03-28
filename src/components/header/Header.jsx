import { useState } from "react";
import "./header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Links from "./links/Links";
import Button from "../button/Button";

const Header = () => {
  const [open, setOpen] = useState(false);

  const CallBack = (childData) => {
    return setOpen(childData);
  };
  return (
    <div className="header">
      <div className="burger">
        <div className={`burger__menu ${open ? "burger__menu--open" : ""}`}>
          <Links lang={"en"} handleCallBack={CallBack} />
        </div>
        <Button
          onClick={() => setOpen((prev) => !prev)}
          className="burger__btn"
          text={!open ? <RxHamburgerMenu /> : <RxCross1 />}
        ></Button>
      </div>
      <button>login</button>
    </div>
  );
};

export default Header;
