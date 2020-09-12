import React from 'react'
import io from 'socket.io-client'

/* a wrapper/context provider that simple holds all current chats in the state */
/* we will want a reducer to have a greater control over what's being returned from the server
and map it to the shape we expect */ 
/* we also want an initial state to make sure everything is working correctly in our layout */ 

//initialize a context object
export const CTX = React.createContext();

/* How do we retain our existing state while mapping over a chat that we received
 and re-rendering the page?
    1.chat comes in with a topic on that object 
we have to retain all of our current messages while adding the new one into the end of a topics array */

//reducer has to be immutable and make a copy every time - ...(spread operator)

const initialState = {
    general: [
        {from: 'Johnson', msg: 'What is the good word?'},
        {from: 'Joseph', msg: 'What is the good word?'},
        {from: 'ssiarules', msg: 'What is the good word?'},
        
    ],
    topic2: [
        {from: 'Johnson', msg: 'What is the good word?'},
        {from: 'Joseph', msg: 'What is the good word?'},
        {from: 'ssiarules', msg: 'What is the good word?'},

    ]
}


function reducer(state, action) {
    const {from, msg, topic} = action.payload;
    switch(action.type) {
       case 'RECEIVE_MESSAGE' :
           return {
               //first spread is bringing forward our entire old state and then
               ...state,
               [topic]: [
                   ...state[topic],
                     { from,  msg}
               ]
           }
           default:
               return state
    }
}

//initialize the socket we declare a variable called socket outside the functional component.
//the reason we do it outside the function is because we don't want it to re-render every time the store reloads

 let socket;


export default function Store(props) {

    //we are checking first socket if there's no socket socket than we are going to create one with IO function
    //set it manually to the be port 3001(which we define in our server file)
//Client Connection 
    if (!socket) {
        socket = io('3001')
    }

    const reducerHook = React.useReducer(reducer, initialState) //takes two argument reducer function & initial state

    //return a context provider with a value that is going to be passed in
    //props.children we define this as a higher-order component 
    //that wraps around the rest of our application and render the rest is normal but gives it additional functionality with the store wrapper
    return(
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    )
}