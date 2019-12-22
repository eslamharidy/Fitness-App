import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import trophy from "./trophy.png";
import star from "./star.png";
import program from "./program.png";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

//here is the pictures for the three options
const progress = {
  workout: star,
  week: trophy,
  program: program
};

//here is the content for the three options
const content = {
  workout: "You finished your workout for today!",
  week: "You have Completed your workout for this Week!",
  program: "You have completed your current program, You made it! "
};

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    height: "100%",
    textAlign: "center",
    backgroundColor: "#070707",
    color: "white"
  },
  cardMedia: {
    margin: "15vh auto 5vh",
    height: "25vh",
    backgroundColor: "#070707",
    color: "white",
    width:'19vh'
  },
  content: {
    backgroundColor: "#070707",
    fontSize: "1rem",
    fontWeight: "600",
    color: "inherit",
    lineHeight: "1.20",
    margin: "0 auto",
    paddingTop: "0"
  },
  body: {
    fontSize: "2.5rem",
    fontWeight: "600",
    lineHeight: "1.25",
    fontFamily: "'Exo 2', sans-serif",
    margin: "0 auto 5vh"
  },
  button: {
    fontSize: "1rem",
    fontWeight: "600",
    textTransform: "none",
    display: "block"
  }
});

export default function Trophy(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.card}>
        <CardActionArea>
          <img
            src={progress[props.achievement]}
            className={classes.cardMedia}
            component="img"
            alt="Contemplative Reptile"
            width="100%"
          />
          <CardContent className={classes.content}>
            <Typography
              className={classes.body}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Well Done!
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.content}
            >
              {content[props.achievement]}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.button}>
          <Link to={"/dashboard"}>
            <Button
              className={classes.button}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="small"
            >
              Back to Dashboard
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
}
