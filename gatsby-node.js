const projects = [
  {
    name: "mailr",
    github: "https://github.com/redhair/mailr",
    description:
      "A website/webapp used to curate a list of emails from your audience. You can sign up with Google or email, create a customized link based on your brand, and start collecting emails of your closest fans. Mailr is designed to make mailing list curation simple. Personal websites are overkill for people just trying to collect emails for their newsletter. Mailr fixes this and takes no more than 5 minutes to setup.",
    techStack: [
      "react",
      "next.js",
      "next-auth",
      "vercel",
      "mongodb",
      "mongoose",
      "styled-components",
      "stripe",
      "chart.js",
    ],
  },
  {
    name: "afito-ui",
    github: "https://github.com/afito-com/afito-ui",
    website: "https://afito-ui.netlify.app/",
    description:
      "A React UI library made for https://afito.com. This library supports tree shaking and code splitting resulting in optimal performance regardless of how large the library grows. This library can be installed via npm and follows semantic versioning and conventional commits. You can install the latest verison by typing in `npm i afito-ui`. This library contains all afito components used across the entire afito ecosystem. It contains everything from primitive components like buttons to complex, fully custom, stripe-based payment funnels.",
    techStack: [
      "react",
      "rollup",
      "semantic-release",
      "travis-ci",
      "npm",
      "storybook",
      "styled-components",
      "stripe",
      "jest",
      "codecov",
      "react-google-maps",
    ],
  },
  {
    name: "ethersplit",
    github: "https://github.com/redhair/ethersplit-website",
    website: "https://ethersplit.online",
    description:
      "A NFT minting website for first edition EtherSplit Starter and Booster packs. EtherSplit is an up and coming NFT based trading card game. You pay to mint Starter/Booster packs, then you can open these packs to receive randomly generated cards. These cards can then be used to build your own deck, or traded/sold to other players.",
    techStack: [
      "react",
      "gatsby",
      "web3",
      "ethereum",
      "webpack5",
      "yarn",
      "tailwindcss",
      "cloudflare-pages",
    ],
  },
  {
    name: "gatsby-web3-starter",
    github: "https://github.com/redhair/gatsby-web3-starter",
    website: "https://redhair.github.io/gatsby-web3-starter/",
    description:
      "A template repository for the purpose of quickly creating a blockchain enabled website. This starter utilizes Webpack 5 and Gatsby 4, and gatsby-plugin-image for maximum performance.",
    techStack: ["gatsby", "web3", "react", "webpack5", "tailwindcss"],
  },
]

exports.createPages = async ({ actions: { createPage } }) => {
  projects.forEach((project, i) => {
    const prevProject = i === 0 ? null : projects[i - 1]
    const nextProject = i === projects.length ? null : projects[i + 1]

    createPage({
      path: `/${project.name}`,
      component: require.resolve("./src/templates/projectPage.js"),
      context: { project, prevProject, nextProject },
    })
  })
}
