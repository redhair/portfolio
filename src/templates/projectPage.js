import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { DiCodeBadge } from "react-icons/di"
import { HiArrowNarrowLeft, HiArrowNarrowRight, HiLink } from "react-icons/hi"

ProjectPage.propTypes = {}

function ProjectPage(props) {
  const project = props.pageContext.project
  const prevProject = props.pageContext.prevProject
  const nextProject = props.pageContext.nextProject

  return (
    <Layout>
      <div className="">
        <h1 className="text-matrix text-2x font-bold font-mono mb-4">
          {project.name}
        </h1>
        <div className="flex mb-4">
          <a
            href={project.github}
            target="_blank"
            className="block text-2xl font-bold mt-4 mr-4 text-matrix font-mono border p-2 lg:inline-block lg:mt-0 hover:text-matrix border-black rounded hover:border-matrix"
          >
            <DiCodeBadge />
          </a>
          {!!project.website && (
            <a
              href={project.website}
              target="_blank"
              className="block text-2xl font-bold mt-4 mr-4 text-matrix font-mono border p-2 lg:inline-block lg:mt-0 hover:text-matrix border-black rounded hover:border-matrix"
            >
              <HiLink />
            </a>
          )}
        </div>
        <div className="flex flex-wrap mb-8">
          {project.techStack.map(t => {
            return (
              <div className="px-4 py-2 text-sm rounded-full mr-2 mb-2 bg-green-900 text-matrix font-bold font-mono">
                {t}
              </div>
            )
          })}
        </div>
        <p className="text-matrix font-bold font-mono">{project.description}</p>
        <div className="flex justify-between mt-8">
          {!!prevProject ? (
            <Link
              className="flex items-center mr-4 px-4 py-4 border border-matrix rounded text-matrix"
              to={"/" + prevProject.name}
            >
              <HiArrowNarrowLeft className="mr-2" />
              {prevProject.name}
            </Link>
          ) : (
            <div></div>
          )}
          {!!nextProject ? (
            <Link
              className="flex items-center ml-4 px-4 py-4 border border-matrix rounded text-matrix"
              to={"/" + nextProject.name}
            >
              {nextProject.name} <HiArrowNarrowRight className="ml-2" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage
