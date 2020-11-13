import React from "react";
import styled, { css } from "styled-components";
import Button from "../../atoms/Button/Button";
import Heading from "../../atoms/Heading/Heading";
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
  background-color: ${({ yellow, theme }) =>
    yellow ? theme.primary : "#ffffff"};
  ${({ flex }) =>
    flex &&
    css`
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

const Card = () => (
  <StyledWrapper>
    <InnerWrapper>
      <StyledHeading>Helloo</StyledHeading>
      <DateInfo>4 days</DateInfo>
    </InnerWrapper>
    <InnerWrapper>
      <Paragraph>my Paragraphworks</Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;
