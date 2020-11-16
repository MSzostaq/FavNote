import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import Heading from "../../atoms/Heading/Heading";
import LinkIcon from "../../../assets/icons/link.svg";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0% 0.1);
  border-radius: 10px;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  min-height: 380px;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  position: relative;
  background-color: ${({ activeColor, theme }) =>
    theme[activeColor] ? theme.primary : "#ffffff"};

  :first-of-type {
    z-index: 99;
  }

  ${({ flex }) =>
    flex &&
    `
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  margin: 0 0 10px;
`;

const StyledHeading = styled(Heading)`
  margin 5px 0 0;
`;

const StyledAvatar = styled.img`
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
  width: 86px;
  height: 86px;
`;

const StyledLinkButton = styled.a`
  background: "#ffffff" url(${LinkIcon}) no-repeat;
  background-position: 50%;
  background-size: contain;
  border-radius: 50px;
  display: block;
  position: absolute;
  right: 25px;
  top: 25px;
  width: 47px;
  height: 47px;
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello Roman</StyledHeading>
      <DateInfo>4 days</DateInfo>
      <StyledAvatar />
      <StyledLinkButton />
    </InnerWrapper>
    <InnerWrapper>
      <Paragraph>my Paragraph works</Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(["note", "twitter", "article"]),
};

Card.defaulrProps = {
  cardType: "note",
};

export default Card;
