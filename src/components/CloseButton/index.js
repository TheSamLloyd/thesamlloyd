import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Cancel from '@material-ui/icons/Cancel';
import Icon from '@material-ui/core/Icon';
import { Link } from "react-router-dom"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    float: "right",
    position: "absolute",
    right: "0em",
    top: "0em"
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="fab" color="default" aria-label="add" className={classes.button} align="right" onClick={props.close}>
        <Cancel />
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);