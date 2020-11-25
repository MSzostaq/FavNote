import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import ButtonIcon from "../../../components/atoms/ButtonIcon/ButtonIcon";
import bulbIcon from "../../../assets/icons/bulb.svg";
import logoIcon from "../../../assets/icons/logo.svg";
import logoutIcon from "../../../assets/icons/logout.svg";
import penIcon from "../../../assets/icons/pen.svg";
import twitterIcon from "../../../assets/icons/twitter.svg";

const StyledWrapper = styled.nav`
  align-items: center;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.note};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100px;
  height: 100vh;
`;

const StyledLogoLink = styled(NavLink)`
  background-image: url(${logoIcon});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
  border: none;
  display: block;
  margin-bottom: 10vh;
  width: 77px;
  height: 77px;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  background-repeat: no-repeat;
  margin-bottom: 25px;
  margin-top: auto;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  height: 64px;
  width: 64px;
  background-repeat: no-repeat;
  margin-bottom: 25px;
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledLogoLink to="/notes" />
    <StyledLinksList>
      <li>
        <StyledButtonIcon
          as={NavLink}
          to="/notes"
          icon={penIcon}
          activeclass="active"
        />
      </li>
      <li>
        <StyledButtonIcon
          as={NavLink}
          to="/twitters"
          icon={twitterIcon}
          activeclass="active"
        />
      </li>
      <li>
        <StyledButtonIcon
          as={NavLink}
          to="/articles"
          icon={bulbIcon}
          activeclass="active"
        />
      </li>
    </StyledLinksList>
    <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(["articles", "notes", "twitters"]),
};

Sidebar.defaultProps = {
  pageType: "notes",
};

export default Sidebar;
