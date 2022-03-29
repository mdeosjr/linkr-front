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
import SearchBar from "../SearchBar";
import api from "../../services/api";

export default function Header() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [toggleLogout, setToggleLogout] = useState(false);

  const HandleClick = () => {
    toggleLogout ? setToggleLogout(false) : setToggleLogout(true);
  };

  const logoutUser = () => {
    api.deleteSession(auth.token, auth.id);
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <>
      <HeaderContainer>
        <HeaderLogo
          onClick={() => {
            navigate("/timeline");
          }}
        >
          linkr
        </HeaderLogo>
        <SearchBar></SearchBar>
        <HeaderUser>
          {toggleLogout ? (
            <img src={downArrow} alt="UpArrow" onClick={HandleClick} />
          ) : (
            <img src={upArrow} alt="DownArrow" onClick={HandleClick} />
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
