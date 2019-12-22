import React from "react";
import {
  Button,
  CssBaseline,
  Paper,
  Grid,
  Box,
  Typography, Container
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {  ArrowRight, ArrowLeft } from "@material-ui/icons";




const useStyles = makeStyles((theme) => ({
  overlay: {
    position: 'absolute',
    borderTopRightRadius: '16px',
    borderTopLeftRadius: '16px',
    marginBottom: "0", 
    backgroundColor: '#070707',
    top: '220px',
    textAlign: 'left',
    height: "500px"
  },
  content: {
    height: '300px',
    margin: '5vh'
  },
  container: {
    backgroundColor: theme.palette.backgroundColor
  },
  textField: {
    outlineColor: theme.palette.textColor
  },
  arrow: {
    verticalAlign: "bottom",
    fontSize: '0.9rem'
  },
  grid: {
    marginTop: theme.spacing(2),
    backgroundColor: "#383838",
    color: "white",
    height: "50px",
    "& p": {
      marginBottom: "1%",
      marginTop: "1%"
    }
  },
  links : {
    position: 'absolute',
    top:'0',
    width:'100%',
    fontSize: '0.9rem',
    marginTop: '5px'
  },
  profile : {
    position:"absolute",
    left:"0"
  },
  calendar : {
    position:"absolute",
    right:"0"
  }
  }
));


export default function Workout(props) {
  const classes = useStyles();
  const { startWorkout, title, description } = props;
  const background = `url(https://source.unsplash.com/featured/?{crossfit},${title})`
  const style = {backgroundImage: background, size: '800px',
    height: '320px',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end'}
  return (
      <div style={style}>
            <div className={classes.links}>
               <Grid container>
              <Grid item xs className={classes.profile}>
                <Link to="/dashboard" variant="body2">
                  <ArrowLeft className={classes.arrow} /> My profile
                </Link>
              </Grid>
              <Grid item xs className={classes.calendar}>
                <Link to="/calendar" variant="body2">
                  My calendar <ArrowRight className={classes.arrow} />
                </Link>
              </Grid>
            </Grid></div>
        <Container className={classes.overlay}>
          <div className={classes.content}>
        <Typography
              component="h1"
              variant="h5"
              color="primary"
            >
              {title} workout 
            </Typography>
            <Typography>
              {description}
            </Typography>
            </div>
        <Button
              onClick={() => startWorkout()}
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
            >
              Start
            </Button>
            </Container>

      </div>

  )}