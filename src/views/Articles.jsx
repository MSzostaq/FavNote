import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GridTemplate from "../templates/GridTemplate";
import Card from "../components/molecules/Card/Card";

const Articles = ({ articles }) => (
  <GridTemplate>
    {articles.map(({ articleUrl, content, created, id, title }) => (
      <Card
        id={id}
        articleUrl={articleUrl}
        content={content}
        created={created}
        key={id}
        title={title}
      />
    ))}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    })
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles };
};

export default connect(mapStateToProps)(Articles);
