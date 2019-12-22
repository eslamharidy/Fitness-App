import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    width: '100%',
    marginRight: '0',
    marginBottom: '6%',
    marginTop: '1%',

    '& img': {
      width: '80%',
      marginRight: '0',
      marginBottom: '6%',
      marginTop: '1%'
    }
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  container: {
    backgroundColor: theme.palette.backgroundColor
  },
  textField: {
    outlineColor: theme.palette.textColor
  }
}));

export default function ScheduleContainer() {
  const classes = useStyles();
  //   const { classes } = this.props;
  return (
    <React.Fragment>
      {/* <Container fixed> */}
      {/* <Container maxWidth='lg'> */}
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper className={classes.grid}></Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.grid}></Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.grid}></Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.grid}></Paper>
          </Grid>
        </Grid>
        <Card>
          <CardMedia
            className={classes.media}
            title='Workout impression'
            image='https://source.unsplash.com/featured/?{weightlifting}'
            imgText='main image description'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Today's Workout
            </Typography>
            {/* <Button variant='contained' color='primary'>
              Time to complete: 75 minutes
            </Button> */}
            <Typography variant='body2' color='textSecondary' component='p'>
              2 Exercices
            </Typography>
          </CardContent>
          <Button variant='contained' color='primary'>
            START WORKOUT
          </Button>
        </Card>
      </Container>
    </React.Fragment>
  );
}

// import React from 'react';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import Paper from '@material-ui/core/Paper';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

// class ScheduleContainer extends React.Component {
//   render() {
//     const { classes } = this.props;
//     return (
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div className={classes.paper}>
//           <CardMedia
//              className={classes.media}title='Workout impression' image='https://source.unsplash.com/featured/?{weightlifting}' imgText='main image description'/>
//         </div>
//         <Box mt={8}></Box>
//       </Container>
//     );
//   }
// }

// export default withStyles(styles)(ScheduleContainer);
