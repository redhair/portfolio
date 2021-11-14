import React from "react"
import PropTypes from "prop-types"

BlogPost.propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string,
    uniqueSlug: PropTypes.string,
    virtuals: PropTypes.shape({
      subtitle: PropTypes.string,
      readingTime: PropTypes.number,
      totalClapCount: PropTypes.number,
    }),
  }),
}

function BlogPost({ node }) {
  const {
    title,
    uniqueSlug,
    virtuals: { subtitle, readingTime, totalClapCount },
  } = node
  return (
    <a
      href={`https://medium.com/tombonanni/${uniqueSlug}`}
      target="_blank"
      rel="noreferrer"
    >
      <div class="mb-6 p-6 border-matrix border-2 rounded-lg">
        <h3 class="font-bold text-matrix font-mono">{title}</h3>
        {!!readingTime && (
          <p class="text-matrix font-mono mb-2">
            {Math.round(readingTime)} min read
          </p>
        )}
        {!!totalClapCount && (
          <p class="text-matrix font-mono mb-2">{totalClapCount} claps</p>
        )}
        <p class="text-matrix font-mono">{subtitle}</p>
      </div>
    </a>
  )
}

export default BlogPost
