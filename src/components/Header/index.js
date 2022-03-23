import {
  HeaderContainer,
  HeaderLogo,
  HeaderLogout,
  HeaderUser,
  HeaderUserImage,
} from "./styles";

import downArrow from "../../assets/DownArrow.svg";
import upArrow from "../../assets/UpArrow.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [toggleLogout, setToggleLogout] = useState(false);

  const HandleClick = () => {
    toggleLogout ? setToggleLogout(false) : setToggleLogout(true);
  };

  const logoutUser = () => {
    localStorage.removeItem("auth");
  };

  return (
    <>
      <HeaderContainer>
        <HeaderLogo>linkr</HeaderLogo>
        <HeaderUser>
          {toggleLogout ? (
            <img src={upArrow} alt="UpArrow" onClick={HandleClick} />
          ) : (
            <img src={downArrow} alt="DownArrow" onClick={HandleClick} />
          )}
          <HeaderUserImage
            src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            alt="user"
            onClick={HandleClick}
          />
          {toggleLogout ? (
            ""
          ) : (
            <HeaderLogout>
              <Link to="/" onClick={logoutUser}>
                Logout
              </Link>
            </HeaderLogout>
          )}
        </HeaderUser>
      </HeaderContainer>
    </>
  );
}
