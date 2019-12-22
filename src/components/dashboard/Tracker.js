import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import styles from "./styles";

const Tracker = props => {
  const { classes } = props;
  const icon = props.icon === 'kcal' ? <WhatshotIcon className={classes.trackerIcon}/>
  : props.icon ==='time' ? <AccessAlarmsIcon className={classes.trackerIcon}/>
  : props.icon ==='completed' ? <CheckCircleOutlineIcon className={classes.trackerIcon}/> 
  :null

  return (
    <div className={classes.tracker} >
      <Paper style={{height:'15vh', background: "#070707"}} className={classes.trackerContent}>
        {icon}        
        <Typography component="p" color='primary'>
          <strong>{props.number}</strong>
        </Typography>
      </Paper>{" "}
    </div>
  );
};

export default withStyles(styles)(Tracker);
