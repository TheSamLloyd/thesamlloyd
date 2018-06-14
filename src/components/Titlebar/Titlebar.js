import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GenreButton from "./genreButton"

const styles = theme=>({
  root: {
    flexGrow: 1,
    marginBottom: 24
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    display: 'inline-block'
  },
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Sam Lloyd
          </Typography>
          <Typography className={classes.menuButton} >
            {props.allGenres.map(genre=>{
              return <GenreButton key={genre} genre={genre} action={props.cGenres.includes(genre) ? props.dropGenre : props.setGenre} display={props.cGenres.includes(genre)}/> 
            })}
            <GenreButton genre="all" action={props.clearGenre}/>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);