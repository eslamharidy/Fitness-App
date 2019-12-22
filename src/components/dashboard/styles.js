export default theme => ({
  userCard: {
    marginTop: "2vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
    margin: "0 auto"
  },
  userImage: {
    border: "3px solid",
    borderColor: theme.palette.primary.dark,
    width: "20vw",
    height: "20vw"
  },
  progressBar: {
    margin: "2vh auto",
    position: "relative",
    height: "2vh",
    width: "75vw",
    borderRadius: "50px",
    border: "1px solid",
    borderColor: theme.palette.textColor
  },
  filler: {
    background: theme.palette.secondary.main,
    height: "100%",
    borderRadius: "inherit",
    transition: "width .2s ease-in"
  },
  trackers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tracker: {
    marginTop: "2vh",
    width: "30vw"
  },
  trackerIcon: {
    color: 'white',
    margin: '0 auto',
    paddingBottom: '0',
  },
  trackerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  progressPercentage: {
    marginLeft: "13vw",
    marginTop: "3vh",
    display: "flex",
    justifyContent: "flex-start"
  },
  calendarBtn: {
    width: "35vw",
    height: "15vh",
    background: theme.palette.primary.main,
    color: theme.palette.textColor
  },
  startWorkoutBtn: {
    width: "35vw",
    height: "15vh",
    background: theme.palette.secondary.main,
    color: theme.palette.textColor
  },
  streak: {
    height: "32vh",
    width: "37vw",
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: '#EAF8F9',
    color: theme.palette.primary.main,
    position:'relative'
  },
  streakTitle: {
    marginTop: '2vh', 
    lineHeight: "6vh"
  },
  streakImg: {
    width: '25vw',
  },
  lowerDashboard: {
    marginTop: "5vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  linkBtns: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-around'
  },
  '@media (min-width: 800px)': {
  streakImg: {
      maxHeight: '24vh',
      width: 'auto'
    },
  }
});
