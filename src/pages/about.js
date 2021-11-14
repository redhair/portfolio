import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <div className="text-matrix font-mono text-left">
      <h1 class="py-2 font-bold">About Me</h1>
      <p class="py-2 ">
        I'm a developer, hacker, and designer all packed into one. I'm currently
        working as a Senior Software Engineer at Fingerpaint, and a Co-Founder
        at Afito.
      </p>
      <p class="py-2 ">
        I grew up in Mullica Hill, New Jersey where I first became introduced to
        computers through my father. As I grew up I was a huge fan of online
        video games like Runescape, Age of Empires, and League of Legends. While
        playing these games I always wondered how things like bots, DDoS
        attacks, and private servers worked. This lead me down the path of
        learning how networking and programs work at a low level.
      </p>
      <p class="py-2 ">
        I was so intruiged by this world of networking and programming that I
        decided to major in Computer Science at Rutgers University, New
        Brunswick. In 2014 I wrote my first line of code and never looked back.
      </p>
      <p class="py-2 ">
        When I'm not working you can catch me playing videogames with friends,
        making music in FL Studio, hitting the gym, or cooking a delicious meal
        (sesame chicken anyone?).
      </p>
    </div>
  </Layout>
)

export default AboutPage
