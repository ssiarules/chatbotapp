import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme => ({
    root: {
        margin: "50px",
        padding: theme.spacing(3, 2),
        },
         flex: {
            display: 'flex',
        },
        topicWindow: {
            width: '30%',
            height: '300px',
            borderRight: '1px solid red'
        },
         ChatWindow: {
              width: '70%',
              height: '300px'
         },
          chatBox: {
               width: '85%'
          },
           button: {
                width: '15%'
           },
       
})));



export default function Dashboard(){

    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant='h4' component='h4'>
                    Johnson Joseph Chat App
                </Typography>
                <Typography component='h5'>
                    Topic Placeholder
                </Typography>
           <div className={classes.flex} >
                <div className={classes.topicWindow}>
                    <list>
                        {
                            ["topic"].map(topic => (
                                  <ListItem key={topic} button>
                                      <ListItemText primary={topic} />
                                  </ListItem>
                            ))
                        }
                    </list>
                </div>
                      
                 <div className={classes.chatWindow}>
                
                        {
                            [{from: 'user', msg: 'Hello'}].map((chat, i) => (
                                 <div className={classes.flex} key={i}>
                                        <Chip label={chat.from} className={classes.chip} />
                                 <Typography varient='p'> {chat.msg} </Typography>
                                 </div>
                            ))
                        }
                 </div>
           
           </div>
           <div className={classes.flex} >
            <div className={classes.chatBox}></div>
           
              </div>
            </Paper>
        </div>
  )
}