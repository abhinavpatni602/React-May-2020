import React from 'react';
import withBorder from './hoc/withBorder';

function hello(props){

    //return View(JSX)
    return(
        <div>
            <h2>Hello</h2>
            <p>This is a functional component</p>
            <p>Generated at {new Date().toTimeString()}</p>
            <p>Message: {props.message}</p>
            <p>Inner HTML : {props.children}</p>
        </div>
    )
}

export default withBorder(hello);