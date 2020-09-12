import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }),
);

export default function Dashboard(){

    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
              <Paper elevation={0} />
              <Paper />
              <Paper elevation={3} />
    </div>
        </div>
    )
}