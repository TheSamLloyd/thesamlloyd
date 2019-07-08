import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Cancel from '@material-ui/icons/Cancel';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
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
      <Button variant="text" color="default" aria-label="add" className={classes.button} align="right" onClick={props.close}>
        <Cancel />
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);