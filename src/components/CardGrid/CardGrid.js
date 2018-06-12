import React from "react"
import Project from "../Project"
import { Grid, Typography, Divider } from "@material-ui/core"
import "./cardgrid.css"
const projects = require("../../projects.json")
function hasOne(array, test) {
  let include = false
  test.forEach(testItem => {
    include = include || array.includes(testItem)
  })
  return include
}
function CardGrid(props) {
  const { genre } = props
  const cards = !genre.length ? projects : projects.filter(project => hasOne(project.genre, genre))
  return (
    <Grid container spacing={24} id="container">
      {cards.map((card,id) => (
        <Project title={card.title} src={card.src} key={id} triggerModal={props.triggerModal} self={card}/>
      ))}
    </Grid>)
}

export default CardGrid