import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ImagePalette from 'react-image-palette'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  paper: {
    position: 'fixed',
    top:'10%',
    left:'7.5%',
    width:'80%',
    height:'80%',
    right:'10%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    borderRadius: 25,
    overflow:'hidden'
  },
  titlebar:{
    backgroundSize:'cover',
    backgroundColor:'#000000',
    paddingTop:'15%',
    paddingBottom:'5%',
    margin:-theme.spacing.unit * 4,
    height:'100%',
    width:'110%'
  },
  title:{
    fontWeight:'bolder',
    fontSize: '3.5em',
    display:'inline-block',
    borderRadius:15,
    padding:"0px 10px",
    paddingLeft:'10%',
    marginBottom:'5%',
    boxShadow:"10px 5px 8px"
  },
  info:{
    backgroundColor:'rgba(255,255,255,.92)',
    width:'95%',
    height:'70%',
    paddingLeft:theme.spacing.unit*2,
    paddingRight:theme.spacing.unit*5
  },

});

function fromKey(key){
  var out = "";
  switch(key){
    case "gitref":
      out="View on GitHub:"
      break
    case "heroku":
      out="View on Heroku:"
      break
    case "role":
      out="Roles:"
      break
    case "date":
      out=""
      break
    case "language":
      out="Primary languages:"
      break
    default:
      out="nodisplay"
  }
  return out
}

class SimpleModal extends Component{
  constructor(props){
    super(props)
    this.props=props
  }

  handleOpen = () => {
    console.log("open!")
  };

  handleClose = () => {
    this.props.close()
    };
  render() {
    const { classes } = this.props;
    const card = this.props.self
    return (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.handleClose}
        >
         {this.props.open ?<div className={classes.paper}>
              <ImagePalette image={"/images/"+card.src}>
    {({ backgroundColor, color, alternativeColor }) => (
      <div style={{backgroundColor, color, backgroundImage:'url(images/'+card.src+')'}} className={classes.titlebar}>
        <Typography className={classes.title} style={{ backgroundColor:"rgba("+backgroundColor.slice(4,backgroundColor.length-1)+",.9)",color:alternativeColor}}>{card.title}</Typography>
        <div className={classes.info}>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Typography variant="body1">{card.desc}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography><ul>{Object.keys(card).map(key=>(fromKey(key)!="nodisplay"?<li>{fromKey(key)+" "+card[key]}</li>:null))}</ul></Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    )}
  </ImagePalette>
          </div> : null}
        </Modal>)}
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
export default withStyles(styles)(SimpleModal);