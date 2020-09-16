import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {CTX} from './Store'


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

    // CTX store
    //dispatch allow us to trigger a reducer event
    const {allChats, sendChatAction, user} = React.useContext(CTX);

    console.log({allChats});

    //List of Topics
    const topics = Object.keys(allChats);

    //Local State
    const [activeTopic, changeActiveTopic] = React.useState(topics[0])
    
    /*React Hook: initializing a state to nothing and then we are passing the empty string into
    //Textvalue which is our initial state and when we want to update we just have to call this function.
    //so you state is returning a tuple( A single row of a table, which contains a single record for that relation )
     //first current value and second our update function
*/
    const [ textValue, changeTextValue] = React.useState ('');

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant='h4' component='h4'>
                    Johnson Joseph Chat App
                </Typography>
                <Typography component='h5'>
                   {activeTopic}
                </Typography>
           <div className={classes.flex} >
                <div className={classes.topicWindow}>
                    <list>
                        {
                            topics.map(topic => (
                                  <ListItem onClick={e => changeActiveTopic(e.target.innerText)} button>
                                      <ListItemText primary={topic} />
                                  </ListItem>
                            ))
                        }
                    </list>
                </div>
                      
                 <div className={classes.chatWindow}>
                
                        {
                           allChats[activeTopic].map((chat, i) => (
                                 <div className={classes.flex} key={i}>
                                        <Chip label={chat.from} className={classes.chip} />
                                 <Typography varient='p'> {chat.msg} </Typography>
                                 </div>
                            ))
                        }
                 </div>
           
           </div>
           <div className={classes.flex} >
                <TextField
                 label="Send A Chat" 
                 className={classes.chatBox}
                 value={textValue}
                 onChange={e => changeTextValue(e.target.value)}
               
            />       
               <Button 
               variant="contained" 
               color="primary"
               className={classes.button}
               onClick={() => {
                   sendChatAction({from: user, msg: textValue, topic: activeTopic})
                   changeTextValue('');
               }}
               >
                SEND
               </Button>
            <div className={classes.chatBox}></div>
           
              </div>
            </Paper>
        </div>
  )
}