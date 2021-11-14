import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        {/* <link rel="preconnect" href="https://use.typekit.net/" crossorigin />

        <link
          rel="preload"
          as="style"
          href="https://use.typekit.net/ixz0pdq.css"
        />

        <link
          rel="stylesheet"
          href="https://use.typekit.net/ixz0pdq.css"
          media="print"
          onload="this.media='all'"
        /> */}
      </Helmet>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          background: "black",
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="max-w-xl m-auto">
          {children}
          <footer class="flex flex-col py-6 mt-12 ">
            <Link class="text-matrix font-mono" to="/">
              Home
            </Link>
            <Link class="text-matrix font-mono" to="/">
              Blog
            </Link>
            <Link class="text-matrix font-mono" to="/">
              About
            </Link>
            <a class="text-matrix font-mono" href="https://github.com/redhair">
              Github
            </a>
            <a
              class="text-matrix font-mono"
              href="https://www.linkedin.com/in/tombonanni/"
            >
              LinkedIn
            </a>
          </footer>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
