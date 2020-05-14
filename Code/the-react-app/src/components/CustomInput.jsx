import React from 'react';


const CustomInput = React.forwardRef( (props, ref) =>  {

     return (
         <input ref={r => {ref =r} }/>
     );

})

export default CustomInput;

