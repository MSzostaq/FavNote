import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import Heading from "../../atoms/Heading/Heading";
import LinkIcon from "../../../assets/icons/link.svg";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px 10px hsla(0, 0%, 0% 0.1);
  border-radius: 10px;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  min-height: 350px;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  position: relative;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : "#fff"};

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
  font-weight: ${({ theme }) => theme.light};
  margin: 0 5px 5px;
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 15px;
  top: 15px;
  width: 76px;
  height: 76px;
`;

const StyledLinkButton = styled.a`
  background: "#fff" url(${LinkIcon}) no-repeat;
  background-position: 50%;
  background-size: 60%;
  border-radius: 50px;
  display: block;
  position: absolute;
  right: 25px;
  top: 25px;
  transform: translateY(-50%);
  width: 47px;
  height: 47px;
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const {
      id,
      articleUrl,
      cardType,
      content,
      created,
      title,
      twitterName,
    } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }

    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {cardType === "twitters" && (
            <StyledAvatar
              src={`https://twitter-avatar.now.sh/${twitterName}`}
            />
          )}
          {cardType === "articles" && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button secondary>Remove</Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(["notes", "twitters", "articles"]),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaulrProps = {
  cardType: "notes",
  twitterName: null,
  articleUrl: null,
};

export default Card;
