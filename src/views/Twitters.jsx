import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GridTemplate from "../templates/GridTemplate";
import Card from "../components/molecules/Card/Card";

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(({ content, created, id, title, twitterName }) => (
      <Card
        id={id}
        cardType="twitters"
        content={content}
        created={created}
        title={title}
        twitterName={twitterName}
        key={id}
      />
    ))}
  </GridTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cardType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    twitterName: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = (state) => {
  const { twitters } = state;
  return { twitters };
};

export default connect(mapStateToProps)(Twitters);
