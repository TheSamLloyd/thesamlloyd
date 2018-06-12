import React from 'react'
import Project from "../../components/Project"
import { Grid, Typography, Divider } from "@material-ui/core"


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