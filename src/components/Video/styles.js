import { textAlign } from "@material-ui/system";

export default theme => ({
  paper: {
    paddingTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  logo: {
    width: "100%",

    "& img": {
      width: "80%",
      marginRight: "0",
      marginBottom: "6%",
      marginTop: "1%"
    }
  },
  title: {
    marginBottom: "5px",
    textAlign: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  video: {
    width: "90vw"
  },
  container: {
    backgroundColor: theme.palette.backgroundColor
  },
  textField: {
    outlineColor: theme.palette.textColor
  },
  arrow: {
    verticalAlign: "bottom"
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
  }
});
