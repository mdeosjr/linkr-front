import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  background-color: #151515;
  height: 72px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const HeaderLogo = styled.p`
  font-family: "Passion One";
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 54px;

  letter-spacing: 0.05em;

  color: #ffffff;

  margin: 10px 0 8px 28px;

  @media (max-width: 620px) {
    font-size: 45px;
    line-height: 50px;
    margin: 13px 0 9px 17px;
  }
`;

const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderUserImage = styled.img`
  height: 53px;
  width: 53px;
  border-radius: 50px;
  margin: 10px 17px 9px 16px;
  @media (max-width: 620px) {
    height: 44px;
    width: 44px;
    margin: 12px 14px 16px 0px;
  }
`;

export { Header, HeaderLogo, HeaderUser, HeaderUserImage };
