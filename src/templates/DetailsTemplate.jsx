import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import UserPageTemplate from "./UserPageTemplate";
import Button from "../components/atoms/Button/Button";
import Heading from "../components/atoms/Heading/Heading";
import Paragraph from "../components/atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  max-width: 200vh;
  padding: 25px 150px 25px 75px;
  position: relative;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.light};
  margin: 25px 25px;
`;

const StyledLink = styled.a`
  color: #000000;
  display: block;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.bold};
  margin: 20px 0 50px;
  text-transform: uppercase;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  height: 120px;
  width: 120px;
  position: absolute;
  top: 50px;
  right: -80px;
`;

const DetailsTemplate = ({
  articleUrl,
  content,
  created,
  pageType,
  title,
  twitterName,
}) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          {title}
        </StyledHeading>
        <StyledParagraph>{created}</StyledParagraph>
      </StyledPageHeader>
      <Paragraph>{content}</Paragraph>
      {pageType === "articles" && (
        <StyledLink href={articleUrl}>Open article</StyledLink>
      )}

      <Button as={Link} to={`/${pageType}`}>
        save/close
      </Button>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: "",
  created: "",
  content: "",
  articleUrl: "",
  twitterName: "",
};

export default DetailsTemplate;
