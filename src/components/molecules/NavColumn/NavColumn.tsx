import React, { FC } from "react";
import ButtonNavigate from "../../atoms/ButtonNavigate/ButtonNavigate.tsx";
import "./NavColumn.scss";
const NavColumn: FC = (naRef) => {
  return (
    <div className="nav_column__container">
      <div>
        <ButtonNavigate content={"Manage File"} imgButton={"images/file.png"} />
        <ButtonNavigate
          content={"File Search Management "}
          imgButton={"images/virtual-assistant.png"}
        />
        <ButtonNavigate content={"Setting"} imgButton={"images/setting.png"} />
        <ButtonNavigate content={"Log out"} imgButton={"images/logout.png"} />
      </div>
      <div className="user_navigate">
        <img className="user_navigate__logo" src="images/Frame 435.png" />{" "}
        <div className="user_navigate__name">
          <p className="user_navigate__name--gray">Welcome back,</p>{" "}
          <p className="user_navigate__name--black">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default NavColumn;
