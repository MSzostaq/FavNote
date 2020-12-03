import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { removeItem as removeItemAction } from "../../../actions/index";
import styled from "styled-components";
import withContext from "../../../hoc/withContext";
import Button from "../../atoms/Button/Button";
import Heading from "../../atoms/Heading/Heading";
import LinkIcon from "../../../assets/icons/link.svg";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  box-shadow: 0px 1px 2px 1px #888888;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  min-height: 350px;
  overflow: hidden;
  position: relative;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  position: relative;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : "#ffffff"};

  :first-of-type {
    z-index: 9999;
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
  background-color: "#ffffff" url(${LinkIcon}) no-repeat;
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
      cardContext,
      content,
      created,
      title,
      twitterName,
      removeItem,
    } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${cardContext}/details${id}`} />;
    }

    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={cardContext}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {cardContext === "twitters" && (
            <StyledAvatar
              src={`https://twitter-avatar.now.sh/${twitterName}`}
            />
          )}
          {cardContext === "articles" && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button onClick={() => removeItem(cardContext, id)} secondary>
            Remove
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  cardType: PropTypes.oneOf(["notes", "twitters", "articles"]),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  cardType: "notes",
  twitterName: null,
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id, itemType) => dispatch(removeItemAction(id, itemType)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
