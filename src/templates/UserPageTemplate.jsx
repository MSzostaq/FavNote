import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Sidebar from "../components/organisms/Sidebar/Sidebar";

const Wrapper = styled.div`
  padding-left: 100px;
`;

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

UserPageTemplate.defaultProps = {
  pageType: "notes",
};

export default UserPageTemplate;
