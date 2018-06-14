import React from 'react'
import { Button } from '@material-ui/core';

function genreButton(props){
  return <Button variant="raised" color={props.display? "secondary" : "primary"} onClick={()=>props.action(props.genre)} style={{margin:5}}>{props.genre}</Button>
}

export default genreButton