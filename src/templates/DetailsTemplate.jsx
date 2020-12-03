import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import UserPageTemplate from "./UserPageTemplate";
import Button from "../components/atoms/Button/Button";
import Heading from "../components/atoms/Heading/Heading";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import withContext from "../hoc/withContext";

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 60vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
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
  margin: 0px;
`;

const StyledLink = styled.a`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  color: #000000;
  margin: 20px 0 50px;
  text-transform: uppercase;
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme, activeColor }) => theme[activeColor]};
  font-color: #000000;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  text-decoration: none;
`;

const DetailsTemplate = ({
  articleUrl,
  content,
  created,
  pageContext,
  title,
  twitterName,
}) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          {title}
        </StyledHeading>
        <StyledParagraph>{created}</StyledParagraph>
      </StyledPageHeader>
      <Paragraph>{content}</Paragraph>
      {pageContext === "articles" && (
        <StyledLink href={articleUrl}>Open article</StyledLink>
      )}
      {pageContext === "twitters" && (
        <StyledImage
          alt={title}
          src={`https://twitter-avatar.now.sh/${twitterName}`}
        />
      )}
      <StyledButton as={Link} to={`/${pageContext}`} activeColor={pageContext}>
        save / close
      </StyledButton>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageContext: PropTypes.oneOf(["notes", "articles", "twitters"]).isRequired,
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

export default withContext(DetailsTemplate);
