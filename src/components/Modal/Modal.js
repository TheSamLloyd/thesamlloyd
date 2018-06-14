import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ImagePalette from 'react-image-palette'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  paper: {
    position: 'absolute',
    top: '7.5%',
    left: '7.5%',
    width: '85%',
    height: '85%',
    right: '7.5%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 0,
    borderRadius: 25,
    overflow:'hidden'
  },
  titlebar: {
    backgroundSize: 'cover',
    // margin: -theme.spacing.unit * 4,
    height: '100%',
    width: '100%',
  },
  title: {
    fontWeight: 'bolder',
    fontSize: '3.5em',
    display: 'inline-block',
    borderRadius: 15,
    padding: "0px 10px",
    paddingLeft: '10%',
    marginBottom: '5%',
    marginTop: '10%',
    boxShadow: "10px 5px 8px"
  },
  info: {
    backgroundColor: 'rgba(255,255,255,.92)',
    marginTop:'auto',
    width: 'auto',
    height: '60%',
    position: 'absolute',
    top: 'auto',
    bottom: 0,
    overflowY: "auto !important",
    overflowX: 'hidden',
  },
  bodyText: {
    color: 'black',
    fontSize: '.85em',
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1
  }
});

function fromKey(key, val) {
  var out = "";
  switch (key) {
    case "gitref":
      out = <a href={val}>View on Github</a>
      break
    case "heroku":
      out = <a href={val}>View on Heroku</a>
      break
    case "role":
      out = "Roles: " + val
      break
    case "date":
      out = val
      break
    case "language":
      out = <span>Primary languages: <code>{val}</code></span>
      break
    default:
      out = "nodisplay"
  }
  return out
}

class SimpleModal extends Component {
  constructor(props) {
    super(props)
    this.props = props
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
        {this.props.open ? <div className={classes.paper}>
          <ImagePalette image={"/images/" + card.src}>
            {({ backgroundColor, color, alternativeColor }) => (
              <div style={{ backgroundColor, color, backgroundImage: 'url(images/' + card.src + ')', backgroundAttachment: 'scroll'}} className={classes.titlebar}>
                <Typography className={classes.title} style={{ backgroundColor: "rgba(" + backgroundColor.slice(4, backgroundColor.length - 1) + ",.9)", color: alternativeColor }}>{card.title}</Typography>
                <div className={classes.info}>
                  <Grid container spacing={0} className={classes.bodyText}>
                    <Grid item xs={6}>
                      {card.desc.map(p=><p>{p}</p>)}
                    </Grid>
                    <Grid item xs={6}>
                      <ul>{Object.keys(card).map((key, index) => (fromKey(key) != "nodisplay" ? <li key={key}>{fromKey(key, card[key])}</li> : null))}</ul>
                    </Grid>
                  </Grid>
                </div>
              </div>
            )}
          </ImagePalette>
        </div> : null}
      </Modal>)
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
export default withStyles(styles)(SimpleModal);