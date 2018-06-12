import React from "react"
import Project from "../Project"
import { Grid, Typography, Divider } from "@material-ui/core"
const projects = require("../../projects.json")
function hasOne(array, test) {
  let include = false
  test.forEach(testItem => {
    include = include || array.contains(testItem)
  })
  return include
}
function CardGrid(props) {
  const { genre } = props
  const cards = genre === "" ? projects : projects.filter(project => hasOne(project.genre, genre))
  console.log(cards)
  return (
    <Grid container spacing={24}>
      {cards.map((card,id) => (
        <Project title={card.title} src={card.src} key={id}/>
      ))}
    </Grid>)
}

export default CardGrid