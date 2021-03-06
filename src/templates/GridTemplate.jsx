import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "../components/atoms/Heading/Heading";
import Input from "../components/atoms/Input/Input";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import ButtonIcon from "../components/atoms/ButtonIcon/ButtonIcon";
import UserPageTemplate from "./UserPageTemplate";
import NewItemBar from "../components/organisms/NewItemBar/NewItemBar";
import withContext from "../hoc/withContext";
import plusIcon from "../assets/icons/plus.svg";

const StyledWrapper = styled.div`
  padding: 20px 20px 20px 20px;
  position: relative;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 48px;

  @media (max-width: 1500px) {
    grid-gap: 48px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPageHeader = styled.div`
  margin: 0 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  background-repeat: no-repeat;
  background-size: 30%;
  border-radius: 50px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 9999999;
`;

class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  toggleNewItemBar = () => {
    this.setState((prevState) => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { children, pageContext } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>6 {pageContext}</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon
            onClick={this.toggleNewItemBar}
            icon={plusIcon}
            activeColor={pageContext}
          />
          <NewItemBar
            handleClose={this.toggleNewItemBar}
            isVisible={isNewItemBarVisible}
          />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(["articles", "notes", "twitters"]),
};

GridTemplate.defaultProps = {
  pageContext: "notes",
};

export default withContext(GridTemplate);
