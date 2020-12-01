import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Sidebar from "../components/organisms/Sidebar/Sidebar";

const Wrapper = styled.div`
  padding-left: 100px;
`;

const UserPageTemplate = ({ children }) => (
  <Wrapper>
    <Sidebar />
    {children}
  </Wrapper>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;
