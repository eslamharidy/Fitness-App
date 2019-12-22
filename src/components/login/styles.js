export default theme => ({
  paper: {
    paddingTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  logo: {
    width: "100%",
    marginRight: "0",
    marginBottom: "6%",
    marginTop: "1%",

    "& img": {
      width: "80%",
      marginRight: "0",
      marginBottom: "6%",
      marginTop: "1%"
    }
  },
  form: {
    width: "100%", // Fix IE 11 issue.
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
  },
});
