import React from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  text: {
    fontSize: "3.25em",
  }
};

function TitleBar(props) {
  const { classes } = props;
  return (
      <AppBar color="default" position="absolute">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.text}>
            Sam Lloyd
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitleBar);