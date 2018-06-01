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
const Portfolio = () => (
  <div>
    <Typography variant="headline" gutterBottom align="left">Web Design</Typography>
    <Grid container spacing={16}>
      {webprojects.map((project,id)=><Project title={project.name} href={project.href} src={project.src} key={id} gitref={project.gitref}><code>{project.language}</code><br/>{project.desc}</Project>)}
    </Grid>
    <Divider />
    <Typography variant="headline" gutterBottom align="left">Academic Work</Typography>
    <Grid container spacing={16}>
      <Project title="Tryp.Ninja">Good Project</Project>
      <Project title="Elbie">Good Project</Project>
      <Project title="Societé">Good Project</Project>
      <Project title="?">Good Project</Project>
    </Grid>
    <Divider />
    <Typography variant="headline" gutterBottom align="left">Extracurriculars</Typography>
    <Grid container spacing={16}>
      <Project title="Tryp.Ninja">Good Project</Project>
      <Project title="Elbie">Good Project</Project>
      <Project title="Societé">Good Project</Project>
      <Project title="?">Good Project</Project>
    </Grid>
  </div>
)

export default Portfolio