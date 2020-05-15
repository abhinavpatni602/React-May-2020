import React from 'react';


const Home = (props) =>  {

     console.log("Rendering Home...");

     return (
     <h1>Hello {props.name}</h1>
     );

}

export default Home;