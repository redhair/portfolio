import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { DiGithubAlt } from "react-icons/di"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="z-20 flex flex-wrap items-center justify-between py-6 mb-6 sticky top-0 bg-black bg-opacity-60 backdrop-filter backdrop-blur-md">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <div>
          <Link
            to={`/`}
            href="#responsive-header"
            className="font-mono text-matrix sm:text-4xl text-3xl font-bold"
          >
            {/* <StaticImage loading="eager" src="../images/logo.png" alt="Logo" />
             */}
            bonanni.dev
          </Link>
        </div>
      </div>

      <div
        className={`${
          isExpanded ? `flex` : `hidden`
        } w-full block flex-grow lg:flex order-1 items-center justify-start md:justify-end lg:w-auto`}
      >
        <Link
          className="block font-bold mt-4 mr-4 text-matrix font-mono border p-2 lg:inline-block lg:mt-0 hover:text-matrix border-black rounded hover:border-matrix"
          to="/about"
        >
          About
        </Link>
        <a
          href="https://github.com/redhair"
          target="_blank"
          className="block text-2xl font-bold mt-4 mr-4 text-matrix font-mono border p-2 lg:inline-block lg:mt-0 hover:text-matrix border-black rounded hover:border-matrix"
        >
          <DiGithubAlt />
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-matrix border border-transparent rounded"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
