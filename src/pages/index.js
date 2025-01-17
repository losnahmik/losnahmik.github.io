import React from "react";
import { graphql } from "gatsby";
import { Card } from "../components/Card";
import { Cards } from "../components/Cards";
import { withLayout } from "../utils/withLayout";

const IndexPage = ({ data: { allMarkdownRemark } }) => {
  const posts = allMarkdownRemark.edges;
  return (
    <Cards>
      {posts.map(({ node: post }, index) => {
        const { frontmatter } = post;
        return (
          <Card
            key={index}
            postType={frontmatter.type}
            path={frontmatter.path}
            title={frontmatter.title}
            date={frontmatter.date}
            excerpt={frontmatter.excerpt}
            tags={frontmatter.tags}
            thumbnail={frontmatter.thumbnail}
          />
        );
      })}
    </Cards>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
            tags
            excerpt
            type
            thumbnail
          }
        }
      }
    }
  }
`;

export default withLayout(IndexPage);
