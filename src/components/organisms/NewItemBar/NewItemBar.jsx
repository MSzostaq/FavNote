import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import Heading from "../../atoms/Heading/Heading";
import Input from "../../atoms/Input/Input";
import withContext from "../../../hoc/withContext";
import { addItem as addItemAction } from "../../../actions/index";

const StyledWrapper = styled.div`
  background-color: #ffffff;
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  box-shadow: 0px 1px 2px 1px #888888;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 500px;
  padding: 100px 50px;
  position: fixed;
  right: 0;
  top: 0;
  transform: translate(${({ isVisible }) => (isVisible ? "0" : "100%")})
  z-index: 99999;
  transition: transform 0.5s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  border-radius: 20px;
  margin: 30px 0 100px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-bottom: 25px;
`;

const NewItemBar = ({ addItem, pageContext, isVisible }) => (
  <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <StyledInput placeholder="title" />
    {pageContext === "twitters" && (
      <StyledInput placeholder="twitter name eg. hello_roman" />
    )}
    {pageContext === "articles" && <StyledInput placeholder="link" />}
    <StyledTextArea as="textarea" placeholder="description" />
    <Button
      onClick={() =>
        addItem(pageContext, {
          title: "Hello Roman",
          content: "lorem ipsum dolor sit amet",
        })
      }
      activeColor={pageContext}
    >
      Add Note
    </Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(["articles", "notes", "twitters"]),
  isCisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: "notes",
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemContent, itemType) =>
    dispatch(addItemAction(itemContent, itemType)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
