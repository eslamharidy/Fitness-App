import React from "react";
import {
  Button,
  CssBaseline,
  Paper,
  Grid,
  Box,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Container from "@material-ui/core/Container";
import { Done, ArrowRight, ArrowLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Trophy from "../trophy/Trophy";
import { connect } from "react-redux";
import { workouts } from "../../data";
import Workout from "./Workout";

class Video extends React.Component {
  state = { trophy: false,
     achievement: "",
     start: false };

  finishWorkout = id => {
    this.props.dispatch({
      type: "TODAY_WORKOUTS",
      payload: id
    });
    this.setState({
      trophy: true,
      achievement: "workout"
    });
  };

  startWorkout = () => {
    
    this.setState({
      start: true
    });
  };

  render() {
    const { classes } = this.props;
    if (this.state.trophy) {
      return <Trophy achievement={this.state.achievement} />;
    } if(!this.state.start){
        return <Workout
         startWorkout={this.startWorkout}
         title={workouts[this.props.workouts[0]].title}
         description={workouts[this.props.workouts[0]].description}
         />
    }
    else {
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <video
              className={classes.video}
              // controls
              autoPlay
              src={workouts[this.props.workouts[0]].videoUrl}
            />
            <Typography className={classes.title} component="p">
            <Typography
              className={classes.title}
              component="h1"
              variant="h5"
              color="primary"
            >
              {workouts[this.props.workouts[0]].title}
            </Typography>
              {workouts[this.props.workouts[0]].description}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Paper className={classes.grid}>
                  <p>Kcal</p>
                  <p>{workouts[this.props.workouts[0]].calories}</p>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.grid}>
                  <p>Time</p>
                  <p>{workouts[this.props.workouts[0]].totalTime * 0.0001}</p>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.grid}>
                  <p>Level</p>
                  <p>{workouts[this.props.workouts[0]].difficulty}</p>
                </Paper>
              </Grid>
            </Grid>
            <Button
              onClick={() => this.finishWorkout(this.props.workouts[0])}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <Done />
              Done!
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/dashboard" variant="body2">
                  <ArrowLeft className={classes.arrow} /> My profile
                </Link>
              </Grid>
              <Grid item xs>
                <Link to="/calendar" variant="body2">
                  My calendar <ArrowRight className={classes.arrow} />
                </Link>
              </Grid>
            </Grid>
          </div>
          <Box mt={8}></Box>
        </Container>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    workouts: state.workouts
  };
};

export default withStyles(styles)(connect(mapStateToProps)(Video));
