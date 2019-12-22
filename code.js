// import React, { Component } from 'react'
// import Container from '@material-ui/core/Container';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// import Calendar from './Calendar'
// import { withStyles } from '@material-ui/core/styles';
// import styles from './styles'

// class CalendarContainer extends Component {
//     render() {
//         const { classes } = this.props
//         return (
//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <div className={classes.paper}>

//                     <Calendar />
//                     <Button variant="contained" color="primary" href="dashboard">BACK TO DASHBOARD</Button>
//                 </div>
//                 <Box mt={8}>
//                 </Box>
//             </Container >
//         )
//     }
// }

// export default withStyles(styles)(CalendarContainer)

// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const useStyles = makeStyles(theme => ({
//     root: {
//         width: '100%',
//     },
//     heading: {
//         fontSize: theme.typography.pxToRem(15),
//         fontWeight: theme.typography.fontWeightRegular,
//     },
//     paper: {
//         paddingTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     logo: {
//         width: "100%",
//         marginRight: '0',
//         marginBottom: "6%",
//         marginTop: "1%",

//         "& img": {
//             width: "80%",
//             marginRight: '0',
//             marginBottom: "6%",
//             marginTop: "1%",
//         }

//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
//     container: {
//         backgroundColor: theme.palette.backgroundColor,
//     },
//     textField: {
//         outlineColor: theme.palette.textColor,

//     },
// }));

// export default function Calendar() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <ExpansionPanel>
//                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
//                     <Typography className={classes.heading}>
//                         Month 1
//                     </Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <Typography>

//                         <ExpansionPanel>
//                             <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
//                                 <Typography className={classes.heading}>
//                                     Week 1
//                                 </Typography>
//                             </ExpansionPanelSummary>
//                             <ExpansionPanelDetails>
//                                 <Typography>

//                                     <ExpansionPanel>
//                                         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
//                                             <Typography className={classes.heading}>
//                                                 Day 1
//                                             </Typography>
//                                         </ExpansionPanelSummary>
//                                         <ExpansionPanelDetails>
//                                             <Typography>



//                                             </Typography>
//                                         </ExpansionPanelDetails>
//                                     </ExpansionPanel>

//                                 </Typography>
//                             </ExpansionPanelDetails>
//                         </ExpansionPanel>

//                     </Typography>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             <ExpansionPanel>
//                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
//                     <Typography className={classes.heading}>
//                         Month 1
//                     </Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <Typography>

//                         <ExpansionPanel>
//                             <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
//                                 <Typography className={classes.heading}>
//                                     Week 1
//                                 </Typography>
//                             </ExpansionPanelSummary>
//                             <ExpansionPanelDetails>
//                                 <Typography>

//                                     <ExpansionPanel>
//                                         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
//                                             <Typography className={classes.heading}>
//                                                 Day 1
//                                             </Typography>
//                                         </ExpansionPanelSummary>
//                                         <ExpansionPanelDetails>
//                                             <Typography>



//                                             </Typography>
//                                         </ExpansionPanelDetails>
//                                     </ExpansionPanel>

//                                 </Typography>
//                             </ExpansionPanelDetails>
//                         </ExpansionPanel>

//                     </Typography>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             <ExpansionPanel>
//                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
//                     <Typography className={classes.heading}>
//                         Month 1
//                     </Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                     <Typography>

//                         <ExpansionPanel>
//                             <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
//                                 <Typography className={classes.heading}>
//                                     Week 1
//                                 </Typography>
//                             </ExpansionPanelSummary>
//                             <ExpansionPanelDetails>
//                                 <Typography>

//                                     <ExpansionPanel>
//                                         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
//                                             <Typography className={classes.heading}>
//                                                 Day 1
//                                             </Typography>
//                                         </ExpansionPanelSummary>
//                                         <ExpansionPanelDetails>
//                                             <Typography>



//                                             </Typography>
//                                         </ExpansionPanelDetails>
//                                     </ExpansionPanel>

//                                 </Typography>
//                             </ExpansionPanelDetails>
//                         </ExpansionPanel>

//                     </Typography>
//                 </ExpansionPanelDetails>
//             </ExpansionPanel>
//             <ExpansionPanel disabled>
//                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
//                     <Typography className={classes.heading}>
//                         Disabled Expansion Panel
//                     </Typography>
//                 </ExpansionPanelSummary>
//             </ExpansionPanel>
//         </div>
//     )
// }
