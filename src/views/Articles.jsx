import React from "react";
import GridTemplate from "../templates/GridTemplate";
import Card from "../components/molecules/Card/Card";

const articles = [
  {
    title: "React on my mind",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    articleUrl: "https://youtube.com/helloroman",
    created: "1 day",
  },
  {
    title: "Wish you React",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    articleUrl: "https://youtube.com/helloroman",
    created: "1 day",
  },
  {
    title: "You gave React a bad name",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    articleUrl: "https://youtube.com/helloroman",
    created: "5 days",
  },
  {
    title: "Is it React you looking for?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    articleUrl: "https://youtube.com/helloroman",
    created: "10 days",
  },
];

const Articles = () => (
  <GridTemplate pageType="articles">
    {articles.map(({ articleUrl, content, created, id, title }) => (
      <Card
        cardType="articles"
        articleUrl={articleUrl}
        content={content}
        created={created}
        title={title}
        key={id}
      />
    ))}
  </GridTemplate>
);

export default Articles;
