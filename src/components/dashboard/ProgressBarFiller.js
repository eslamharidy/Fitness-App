import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const ProgressBarFiller = props => {
  const { classes } = props;

  return (
      <div
        className={classes.filler}
        style={{ width: `${props.percentage}%` }}
      ></div>
  );
};

export default withStyles(styles)(ProgressBarFiller);
