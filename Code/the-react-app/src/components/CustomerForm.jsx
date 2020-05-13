import React, {Component} from 'react';

class CustomerForm extends Component {

     render(){
         return (
             <div>
                 <fieldset>
                     <p>ID</p>
                     <div>
                         <input type="number"/>
                     </div>

                     <p>Name</p>
                     <div>
                         <input />
                     </div>

                     <p>Location</p>
                     <div>
                         <input />
                     </div>

                     <div>
                         <button>Save</button> &nbsp;
                         <button>Cancel</button>
                     </div>
                 </fieldset>
             </div>
         );
     }

}

export default CustomerForm;