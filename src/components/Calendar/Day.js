import React from "react";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
// import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
// import Link from 'react-router-dom';
import { Link as Route } from "react-router-dom";
import { green } from "@material-ui/core/colors";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

export default function Day(props) {
  // const { calendar } = props;
  const { day } = props;
  const { workouts } = props;
  // console.log('Calendar:', calendar);
  // console.log('Day:', day);
  // console.log('Workouts:', workouts);

  const images = [
    {
      image: "https://source.unsplash.com/featured/?{weightlifting}"
    },
    {
      image: "https://source.unsplash.com/featured/?{gym}"
    },
    {
      image: "https://source.unsplash.com/featured/?{crossfit}"
    },
    {
      image: "https://source.unsplash.com/featured/?{fitness}"
    },
    {
      image: "https://source.unsplash.com/featured/?{barbells}"
    },
    {
      image: "https://source.unsplash.com/featured/?{bodybuilding}"
    },
    {
      image: "https://source.unsplash.com/featured/?{trainer}"
    }
  ];

  const second =
    day.workouts.length !== 0 ? `${day.workouts.length} workouts:` : `Rest day`;

  const workoutOne = day.workouts[0];
  const workoutTwo = day.workouts[1];

  // const workoutOne = calendar.map((object) => {
  //   return object.workouts[0];
  // });

  // const workoutTwo = calendar.map((object) => {
  //   return object.workouts[1];
  // });

  // const mappedId = workouts.map((object) => {
  //   return object.id;
  // });

  const mappedTitle = workouts.map(object => {
    return object.title;
  });

  const firstWorkout = () => {
    if (workoutOne === 1) {
      return mappedTitle[0];
    } else if (workoutOne === 2) {
      return mappedTitle[1];
    } else if (workoutOne === 3) {
      return mappedTitle[2];
    } else if (workoutOne === 4) {
      return mappedTitle[3];
    } else if (workoutOne === 5) {
      return mappedTitle[4];
    } else {
      return "";
    }
  };

  const secondWorkout = () => {
    if (workoutTwo === 1) {
      return mappedTitle[0];
    } else if (workoutTwo === 2) {
      return mappedTitle[1];
    } else if (workoutTwo === 3) {
      return mappedTitle[2];
    } else if (workoutTwo === 4) {
      return mappedTitle[3];
    } else if (workoutTwo === 5) {
      return mappedTitle[4];
    } else {
      return "";
    }
  };

  const workoutComplete = true;

  const amp = firstWorkout() && secondWorkout() ? ` & ` : ``;

  const complete = workoutComplete ? (
    <CheckBoxIcon style={{ color: green[500], marginRight: "4px" }} />
  ) : null;

  return (
    // <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px auto",
        backgroundColor: "white",
        borderRadius: "4px",
        color: "black"
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src={images[day.id - 1].image} alt="" />
            {/* style={{ width: '60px' }}  */}
          </Avatar>
        </ListItemAvatar>
        {/* <ListItemText
          primary={`Day ${day.day}, ${second}`}
          secondary={`${firstWorkout()} & ${secondWorkout()}`}
          // Workouts:
        /> */}
        <Typography variant="p" color="inherit">
          {`Day ${day.day}, ${second}`}
          <br></br>
          <Route
            to={`/training/${day.workouts[0]}`}
          >{`${firstWorkout()}`}</Route>
          {amp}
          <Route
            to={`/training/${day.workouts[1]}`}
          >{`${secondWorkout()}`}</Route>
        </Typography>
      </ListItem>
      {complete}
      {/* <CheckBoxIcon style={{ color: green[500] }} /> */}
    </div>
  );
}
