import React, { Component } from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid"
const styles = (theme)=>({
  card: {
    maxWidth: 345,
    position: 'relative',
    borderRadius: '10%',
    overflow: 'hidden',
    marginTop: 'auto',
    backgroundSize:'cover',
    backgroundPosition:"center",
    border: "6px white solid"
  },
  content: {
    paddingTop:'25%',
  },
  title:{
    margin: 'auto',
    textAlign: 'center',
    width:'100%',
    color:"#FFFFFF",
    fontSize:'85%',
    fontWeight:'bold',
    verticalAlign:'middle',
  },
  overlayHover:{
  position: 'absolute',
  display: 'block',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.65,
  transition: "opacity 0.5s",
  background: theme.palette.primary.main,
  },
  overlay: {
  position: 'absolute',
  display: 'block',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0,
  transition: "opacity 0.3s",
  background: theme.palette.primary.main
  },
  polygon:{
    fill:theme.palette.secondary.main
  }
})
class Project extends Component {
  constructor(props){
    super(props)
    this.state={opacity:0, mouseOn:false}
    this.props=props
  }
  onMouseEnter(e){
    if (this.state.mouseOn) return
    this.setState({mouseOn:true})
  }
  onMouseLeave(e) {
    this.setState({mouseOn:false})
  }
  render(){
    const { classes } = this.props;
    return (
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Card className={classes.card} style={{ backgroundImage: "url(images/" + this.props.src + ")" }} onMouseOver={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}
        onClick={(e)=>this.props.triggerModal(this.props.self)}>
          <CardContent className={classes.content}>
            <div className={this.state.mouseOn ? classes.overlayHover : classes.overlay}></div>
            <svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" style={{position:"relative"}}>
            <polygon points="50,0 6.698,25, 6.698,75 50,100 93.3,75 93.3,25" className={classes.polygon} stroke="white" opacity={.7}/>
              <foreignObject x="7.5" y="25" width="85" height="50">
              <Typography className={classes.title} variant="headline"xmlns="http://www.w3.org/1999/xhtml">{this.props.title}</Typography>
              </foreignObject>
            </svg>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);