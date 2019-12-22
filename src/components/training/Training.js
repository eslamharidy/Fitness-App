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
import logo from "../../images/logo.png";
import { Done, ArrowRight, ArrowLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Trophy from "../trophy/Trophy";
import { connect } from "react-redux";

class Training extends React.Component {
  state = { trophy: false, achievement: "" };

  componentDidMount() {
    console.log("comp did mount");
    if (this.props.match.params.trainingId)
      this.props.dispatch({
        type: "WORKOUT",
        payload: this.props.match.params.trainingId
      });
  }

  finishWorkout = () => {
    this.setState({
      trophy: true,
      achievement: "workout"
    });
  };

  render() {
    console.log("tis.props.workout", this.props.workout);

    const { classes } = this.props;
    if (this.state.trophy) {
      return <Trophy achievement={this.state.achievement} />;
    } else {
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <div className={classes.logo}>
              <img src={logo} alt="IMP Trainer" />
            </div>
            <Typography
              className={classes.title}
              component="h1"
              variant="h5"
              color="primary"
            >
              {this.props.workout.title}
            </Typography>
            <video
              className={classes.video}
              controls
              autoPlay
              src={this.props.workout.videoUrl}
            />
            <Typography className={classes.title} component="p">
              {this.props.workout.description}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Paper className={classes.grid}>
                  <p>Kcal</p>
                  <p>{this.props.workout.calories}</p>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.grid}>
                  <p>Time</p>
                  <p>{this.props.workout.totalTime * 0.0001 || "ccc"}</p>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.grid}>
                  <p>Level</p>
                  <p>{this.props.workout.difficulty}</p>
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
  console.log("recieve state");
  return {
    workout: state.workout
  };
};

export default withStyles(styles)(connect(mapStateToProps)(Training));
