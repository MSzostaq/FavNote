import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import Heading from "../../atoms/Heading/Heading";
import Input from "../../atoms/Input/Input";
import withContext from "../../../hoc/withContext";

const StyledWrapper = styled.div`
  background-color: #ffffff;
  border-left: 5px solid ${({ theme, activeColor }) => theme[activeColor]};
  box-shadow: 0px 1px 2px 1px #888888;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 480px;
  padding: 100px 50px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;
`;

const StyledTextArea = styled(Input)`
  border-radius: 20px;
  margin: 30px 0 100px;
  height: 30vh;
`;

const NewItemBar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <Input placeholder="title" />
    <StyledTextArea as="textarea" placeholder="title" />
    <Button activeColor={pageContext}>Add Note</Button>
  </StyledWrapper>
);

export default withContext(NewItemBar);
