import React from "react"
import Project from "../../components/Project"
import { Grid, Typography, Divider } from "@material-ui/core"

const Portfolio= ()=>(
  <div>
    <Typography variant="headline" gutterBottom align="left">Web Design</Typography>
    <Divider/>
    <Grid container spacing={16}>
      <Project title="Tryp.Ninja" src="trypninja.png">Good Project</Project>
      <Project title="Elbie" src="elbie.png">Discord bot designed to run rules-lite TTRPGs.</Project>
      <Project title="Societé">Good Project</Project>
      <Project title="?">Good Project</Project>
    </Grid>
    <Typography variant="headline" gutterBottom align="left">Academic Work</Typography>
    <Divider />
    <Grid container spacing={16}>
      <Project title="Tryp.Ninja">Good Project</Project>
      <Project title="Elbie">Good Project</Project>
      <Project title="Societé">Good Project</Project>
      <Project title="?">Good Project</Project>
    </Grid>
    <Typography variant="headline" gutterBottom align="left">Extracurriculars</Typography>
    <Divider />
    <Grid container spacing={16}>
      <Project title="Tryp.Ninja">Good Project</Project>
      <Project title="Elbie">Good Project</Project>
      <Project title="Societé">Good Project</Project>
      <Project title="?">Good Project</Project>
    </Grid>
  </div>
)

export default Portfolio