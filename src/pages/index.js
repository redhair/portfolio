import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard"
import BlogPost from "../components/BlogPost"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <p class="p-2 font-mono text-matrix text-left">
      Full Stack Blockchain Engineer. Want to know more? Head over to my{" "}
      <Link to="/about">About</Link>.
    </p>
    <h2 class="mt-12 mb-2 font-bold text-matrix font-mono text-base">
      <span class="py-2">Featured projects</span>
    </h2>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-2 mt-4">
      <ProjectCard
        title="ethersplit"
        description="A basic application for tracking your ERC-20 tokens"
        link="/ethersplit"
        color="green"
        tags={["ethereum", "react", "tailwindcss"]}
      />
      <ProjectCard
        title="afito-ui"
        description="Building blocks for Afito Apps"
        link="/afito-ui"
        color="green"
        tags={["react", "storybook", "styled-components", "stripe"]}
      />
      <ProjectCard
        title="mailr"
        description="Curate your mailing list"
        link="/mailr"
        color="green"
        tags={["react", "NEXT.js", "mongodb", "chart.js"]}
      />
      <ProjectCard
        title="gatsby-web3-starter"
        description="Audit any website for WCAG compliance"
        link="/gatsby-web3-starter"
        color="green"
        tags={["node.js", "lighthouse"]}
      />
    </div>
    <h2 class="mt-12 mb-2 font-bold text-matrix font-mono text-base">
      <span class="py-2">My posts</span>
    </h2>
    <div class="mt-4 mb-36">
      {data.allMediumPost.edges.map(({ node }) => (
        <BlogPost node={node} />
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          virtuals {
            subtitle
            readingTime
            totalClapCount
          }
          author {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
