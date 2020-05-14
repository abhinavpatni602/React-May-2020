import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class CustomerForm extends Component {

    state = {
        customer: { id: 0, name: "", location: ""},  
    }

    constructor(props){
        super(props);

        this.initState = {...this.state};

        if(this.props.data){
            this.state.customer = this.props.data;
        }
        console.log("[CustomerForm constructor]", this.props)
        
    }

    // static getDerivedStateFromProps(nextProps, currentState){

    //     //return the new derived states
    //     if(nextProps.data.id !== currentState.customer.id){
    //        return {
    //            ...currentState,
    //            customer: nextProps.data
    //        }
    //     }
    //     else{
    //         return null;
    //     }
    // }

    
    change = (evt)=> {
        const value = evt.target.value;
        const name = evt.target.name;

        const updatedCustomer = {...this.state.customer};
        if(name === "id"){
            updatedCustomer[name] = value ? parseInt(value): 0;
        }
        else{
            updatedCustomer[name] = value;
        }
        this.setState({
            customer: updatedCustomer
        });
    }

    save = () => {
        if(this.props.onSave){
            this.props.onSave(this.state.customer);
            this.setState(this.initState);
        }
    }

    cancel = () => {
        if(this.props.onCancel){
            this.props.onCancel();
        }
    }

     render(){
         return (
             <div>
                 <fieldset>
                     <p>ID</p>
                     <div>
                         <input name="id" type="number" value={this.state.customer.id} onChange={this.change}/>
                     </div>

                     <p>Name</p>
                     <div>
                         <input name="name" value={this.state.customer.name} onChange={this.change}/>
                     </div>

                     <p>Location</p>
                     <div>
                         <input name="location" value={this.state.customer.location} onChange={this.change}/>
                     </div>

                     <div>
                         <button onClick={this.save}>Save</button> &nbsp;
                         <button onClick={this.cancel}>Cancel</button>
                     </div>
                 </fieldset>
             </div>
         );
     }

}

export default withRouter(CustomerForm);
//export default CustomerForm;