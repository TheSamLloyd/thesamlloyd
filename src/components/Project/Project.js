import React from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid"
const styles = {
  card: {
    maxWidth: 345,
    height: '100%',
    position: 'relative'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button:{
    position:"absolute",
    bottom: -5
  }
};

function Project(props) {
  const { classes } = props;
  return (
    <Grid item xs ={6} s={4} md={3}>
      <Card className={classes.card}>
        <a href={props.href}>
          <CardMedia
          className={classes.media}
          image={`/images/${props.src}`}
          title={props.title}
          />
        </a>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              <a href={props.href}>
              {props.title}
              </a>
            </Typography>
            <Typography component="p">
              {props.children}
            </Typography>
            <br/>
          </CardContent>
        {props.gitref ? 
          <CardActions className={classes.button}>
          <Button size="small" color="primary" position="absolute">
            <a href={props.gitref}>View on GitHub</a>
          </Button>
          </CardActions> : null}
      </Card>
    </Grid>
  );
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);