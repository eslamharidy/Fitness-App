
import React from 'react';
import '@lottiefiles/lottie-player';
import  { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import logo from "../images/logo.png";


const useStyles = makeStyles({
  button: {
    fontSize: "1rem",
      fontWeight: "600",
      textTransform: "none",
      display:"block",
  },  
});




export default function Notfound() {
  const classes = useStyles();

  const style={width: "100%",
   height: "100%"}

  return (
  <div>
    <div>
          <img src={logo} style={{ width: "50vh" }} alt="logo" />
        </div>

<lottie-player
    src="https://assets3.lottiefiles.com/packages/lf20_552kX6.json" style={style} background="transparent"  speed="1"   loop  autoplay >
</lottie-player>

<Link to={'/dashboard'}>
          <Button  className={classes.button}
            type="submit"
            fullWidth
            variant="contained"
            color="primary" size="small">
          Back to Dashboard
        </Button>
        </Link>
</div>)
}