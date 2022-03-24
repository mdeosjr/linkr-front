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
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

export default function Header() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [toggleLogout, setToggleLogout] = useState(false);

  const HandleClick = () => {
    toggleLogout ? setToggleLogout(false) : setToggleLogout(true);
  };

  const logoutUser = () => {
    localStorage.removeItem("auth");
    navigate("/");
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
          <HeaderUserImage src={auth.image} alt="user" onClick={HandleClick} />
          {toggleLogout ? (
            <HeaderLogout>
              <Link to="/" onClick={logoutUser}>
                Logout
              </Link>
            </HeaderLogout>
          ) : (
            ""
          )}
        </HeaderUser>
      </HeaderContainer>
    </>
  );
}
