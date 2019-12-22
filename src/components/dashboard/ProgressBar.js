import React from "react";
import ProgressBarFiller from "./ProgressBarFiller";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import Typography from "@material-ui/core/Typography";

const ProgressBar = props => {
  const { classes } = props;

  return (
    <div>
    <div className={classes.progressPercentage}><FontAwesomeIcon icon={faTrophy}/> <Typography variant="subtitle2" color="primary"> <strong>&ensp;{props.percentage}% of your program</strong></Typography></div>

      <div className={classes.progressBar}>
        <ProgressBarFiller
          className={classes.progressBar}
          percentage={props.percentage}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(ProgressBar);
