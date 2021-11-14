import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.oneOf(["blue", "green", "purple", "orange"]),
  tags: PropTypes.arrayOf(PropTypes.string),
}

function ProjectCard({ title, color, description, link, tags = [] }) {
  const getColor = c =>
    c === "blue"
      ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      : c === "purple"
      ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
      : c === "green"
      ? "bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500"
      : c === "orange"
      ? "bg-gradient-to-r from-yellow-600 via-red-500 to-pink-500"
      : "bg-gray-500"

  return (
    <Link class="flex" to={link}>
      <div
        className={
          "relative border-matrix border-2 overflow-hidden mb-2 mr-2 flex flex-grow flex-col p-6 rounded-lg"
        }
      >
        <h3 class="text-matrix font-mono font-bold mb-4 text-xl z-10">
          {title}
        </h3>
        <p class="text-matrix font-mono z-10">{description}</p>
        <div class="flex mt-4 flex-wrap flex-grow-0	z-10">
          {tags.map(t => (
            <div className="px-4 py-2 text-sm rounded-full mr-2 mb-2 bg-green-900 text-matrix font-bold font-mono">
              {t}
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 z-0" style={{ margin: -15 }}>
          <StaticImage
            loading="eager"
            src="../images/green_holo_texture_2.png"
            alt="Texture"
            placeholder="blurred"
          />
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
