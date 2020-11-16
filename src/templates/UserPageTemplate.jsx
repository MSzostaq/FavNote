import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "../components/atoms/Heading/Heading";
import Input from "../components/atoms/Input/Input";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Sidebar from "../components/organisms/Sidebar/Sidebar";

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 px 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledWrapper>
      <StyledPageHeader>
        <Input search plaveholder="Search" />
        <StyledHeading big as="h1">
          Notes
        </StyledHeading>
        <StyledParagraph>6 notes</StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(["article", "note", "twitter"]),
};

UserPageTemplate.defaultProps = {
  cardType: "note",
};

export default UserPageTemplate;