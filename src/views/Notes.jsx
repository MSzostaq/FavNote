import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GridTemplate from "../templates/GridTemplate";
import Card from "../components/molecules/Card/Card";

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map(({ content, created, id, title }) => (
      <Card
        id={id}
        cardType="notes"
        content={content}
        created={created}
        title={title}
        key={id}
      />
    ))}
  </GridTemplate>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    })
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
