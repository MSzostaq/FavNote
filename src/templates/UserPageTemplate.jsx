import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Sidebar from "../components/organisms/Sidebar/Sidebar";

const Wrapper = styled.div`
  padding-left: 100px;
`;

// set default props like in ES6
const UserPageTemplate = ({ children, pageType = "notes" }) => (
  <Wrapper>
    <Sidebar pageType={pageType} />
    {children}
  </Wrapper>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  pageType: PropTypes.oneOf(["articles", "notes", "twitters"]),
};

export default UserPageTemplate;
