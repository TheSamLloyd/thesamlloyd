import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ImagePalette from 'react-image-palette'

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
    paddingTop:'20%',
    paddingLeft:'10%',
    paddingBottom:'5%',
    margin:-theme.spacing.unit * 4,
    marginBottom:'auto',
    width:'100%'
  },
  title:{
    fontWeight:'bolder',
    fontSize: '3.5em',
    display:'inline-block',
    borderRadius:15,
    padding:"0px 10px"
  }
});


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
        <Typography className={classes.title} style={{ backgroundColor:"rgba("+backgroundColor.slice(4,backgroundColor.length-1)+",.8)",color:alternativeColor}}>{card.title}</Typography>
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