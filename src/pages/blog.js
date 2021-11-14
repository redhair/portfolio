import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="flex flex-col items-center text-center">
      <h1 class="p-2 text-">Blog</h1>
    </div>
  </Layout>
)

export default BlogPage
