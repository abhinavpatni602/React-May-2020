import React from 'react';



//HOC
// HOC is just a function
// arg ==> the component to wrap
const withBorder = (WrappedComponent) => {

    //return a new component(functional, class)
    return (props) => {

        return (
            <div style={{ border: "2px solid red" }}>
                <WrappedComponent {...props}/>
            </div>
        );
    }
}

export default withBorder;