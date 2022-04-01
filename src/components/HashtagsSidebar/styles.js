import styled from "styled-components";

const SidebarContainer = styled.div`
  height: 406px;
  max-width: 301px;
  width: 301px;
  background: #171717;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-top: 0px;
  position: sticky;
  top: 40px;
  @media (max-width: 920px) {
    display: none;
  }
`;

const SidebarTitle = styled.p`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  color: #ffffff;
  height: 61px;
  width: 100%;
  border-bottom: 1px solid #484848;
  padding: 9px 16px;
  margin-bottom: 22px;
`;

const HashtagLink = styled.a`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #ffffff;
  margin: 3px 16px;
  cursor: pointer;
`;

export { SidebarTitle, SidebarContainer, HashtagLink };
