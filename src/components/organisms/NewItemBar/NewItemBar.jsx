import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { Formik, Form } from "formik";
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
  padding: 20px 50px;
  position: fixed;
  right: 0;
  top: 0;
  transform: translate(${({ isVisible }) => (isVisible ? "0" : "100%")})
  z-index: 99999999;
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

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({ addItem, handleClose, pageContext, isVisible }) => (
  <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <Formik
      initialValues={{
        articleUrl: "",
        content: "",
        created: "",
        title: "",
        twitterName: "",
      }}
      onSubmit={(values) => {
        addItem(pageContext, values);
        handleClose();
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <StyledForm>
          <StyledInput
            type="text"
            name="title"
            placeholder="title"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.title}
          />
          {pageContext === "twitters" && (
            <StyledInput
              placeholder="twitter name eg. hello_roman"
              type="text"
              name="twitterName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.twitterName}
            />
          )}
          {pageContext === "articles" && (
            <StyledInput placeholder="link" type="text" name="articleUrl" />
          )}
          <StyledTextArea
            name="content"
            as="textarea"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.twitterName}
          ></StyledTextArea>
          <Button type="submit" activeColor={pageContext}>
            Add Note
          </Button>
        </StyledForm>
      )}
    </Formik>
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
