import React from 'react'
import Project from "../../components/Project"
import { Grid, Typography, Divider } from "@material-ui/core"

const webprojects = [
  {name: "Elbie",
  language: "javascript/MongoDB",
    href:"https://github.com/TheSamLloyd/Elbie",
  src:"elbie.png",
  desc:"Elbie is a Discord bot designed to run rules-lite TTRPGs, with a focus on PBtA-style games.",
  gitref: "https://github.com/TheSamLloyd/Elbie"
},
  {
    name: "Tryp.Ninja",
    language: "javascript/React/mySQL",
    href: "https://tryp-ninja.herokuapp.com",
    src: "trypninja.PNG",
    desc: "Tryp.Ninja is a social network focused on a \"story\" interface, allowing users to create photo timelines.",
    gitref:"https://github.com/scull1916/TrypNinja"
  },
  {
    name: "Societé",
    language: "javascript/mySQL",
    href: "https://github.com/JoyCurthBlisso/Societe",
    src: "societe.png",
    desc: "Inventory management system for a small business based in Portsmouth, NH.",
    gitref: "https://github.com/JoyCurthBlisso/Societe"
  },
  {
    name: "React Memory Game",
    language: "javascript/React",
    href: "https://react-memory-80s.herokuapp.com/",
    src: "reactmemory.png",
    desc: "A small \"game\" built in React to test one's memory.",
    gitref:"https://github.com/TheSamLloyd/TimedTrivia"
  }
]

const acadProjects = [
  {name: "Hermite Polynomials",
  desc: "For my senior presentation, I wrote this paper on a new approximation method I discovered using orthogonal polynomials."
},
  {
    name: "m-Bonacci Series",
    desc: "In this paper, I attempted to find a closed-form function for the \"Golden Ratio\" of any given m-Bonacci series"
  },
  {
    name: "Reconstruction of Observed Distributions",
    desc: "For a forthcoming paper, I developed a method of reconstructing a probability density function based on moments recovered from data."
  },
  {
    name: "Lill's Method",
    desc: "While trying to solve the m-Bonacci series problem, I wrote a Mathematica notebook implementing Lill's method for solving polynomials."
  }
]

const miscProjects = [
  {name: "Salvage EP",
  desc: "Sound design & scoring for friends' game design project -- while the game didn't fully manifest, the soundtrack is available.",
    href:"http://cavalcadeofsin.bandcamp.com/album/salvage-ost",
    src:"salvage.jpg"
},
  {name: "Soundcloud",
  desc:"Assorted music projects & fragments from the past 8 years, working with pals under the moniker The Cavalcade of Sin",
  src:"cavalcade.jpg",
  href:"https://soundcloud.com/thecavalcade"
  },
  {
    name: "Homebrew",
    desc: "I homebrew a variety of beers, meads, and ciders, too!",
    src: "2udy.jpg"
  }

]
const Portfolio = () => (
  <div>
    <Typography variant="headline" gutterBottom align="left">Web Design</Typography>
    <Grid container spacing={16}>
      {webprojects.map((project,id)=><Project title={project.name} href={project.href} src={project.src} key={id} gitref={project.gitref}><code>{project.language}</code><br/>{project.desc}</Project>)}
    </Grid>
    <Divider />
    <Typography variant="headline" gutterBottom align="left">Academic Work</Typography>
    <Grid container spacing={16}>
      {acadProjects.map((project, id) => <Project title={project.name} href={project.href} src={project.src} key={id}>{project.desc}</Project>)}
    </Grid>
    <Divider />
    <Typography variant="headline" gutterBottom align="left">Extracurriculars</Typography>
    <Grid container spacing={16}>
      {miscProjects.map((project, id) => <Project title={project.name} href={project.href} src={project.src} key={id}>{project.desc}</Project>)}
    </Grid>
  </div>
)

export default Portfolio