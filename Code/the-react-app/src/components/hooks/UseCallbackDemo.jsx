import React, { useState, useCallback } from 'react';

//React.memo ==> 16.3
// The compoment rerenders only if the props or state change 
const Simple = React.memo((props) => {
    console.log("executing simple..");
    return (
        <div>
            <h4>Simple</h4>
            <p>Value: {props.value}</p>
            <button onClick={props.onExecute}>Execute</button>
        </div>
    );
});



const UseCallbackDemo = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const someTask = useCallback(() => {
        
        console.log("executing some task..", name);
        
    }, [name]);
    return (
        <div>
            <h3>UseCallback Demo</h3>

            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <div>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            
            <Simple value={name} onExecute={someTask}/>
        </div>
    )
}

export default UseCallbackDemo;