import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Typography, Avatar } from '@material-ui/core';


const User = (props) => {
    const {classes} = props;
    return (
        <div className={classes.userCard}>
            <Avatar src={props.userImage} className={classes.userImage}/>
            <Typography variant='subtitle1'>{props.userName}</Typography>

        </div>
    );
};

export default withStyles(styles)(User);
