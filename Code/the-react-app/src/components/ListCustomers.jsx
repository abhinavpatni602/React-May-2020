import React, {Component} from 'react';
import Axios from 'axios';
import './ListCustomers.css';

class ListCustomers extends Component {

    state = {
        data: []
    }

    constructor(props){
        
        super(props);
        this.url = "https://calm-beach-18228.herokuapp.com/customers";

    }
    //loaded
    async componentDidMount(){

        try {
            
            const resp = await fetch(this.url);
            const data = await resp.json();
            console.log(data);
            this.setState({
                data:data
            })

        } catch (error) {
            console.log("Error", error)
        }
        

        try {
            const resp = await Axios.get(this.url);
            console.log(resp);
            this.setState({
                data: resp.data
            })

        } catch (error) {
            console.log("Error", error)
        }  
    }

    delete = (evt, custId) => {

        evt.preventDefault();

        //state is immutable
        //copy of state(data)
        const updatedData = [...this.state.data];
        const index = updatedData.findIndex(item => item.id === custId);
        updatedData.splice(index, 1);

        this.setState({
            data: updatedData
        });

    }

    addNew = (evt) => {
        evt.preventDefault();
    }

     render(){
         return (
             <div>
                 <h2>Customers</h2>
                 <p>
                    <a href="#" onClick={this.addNew}>Add New</a>
                 </p>   

                 <div>
                     
                 </div>

                 <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                     {this.state.data.map((item, index) => {
                            return (
                                <div className="customer" key={item.id}>
                                    <p>ID: {item.id}</p>
                                    <p>Name: {item.name}</p>
                                    <p>Location: {item.location}</p>
                                    <div>
                                        {/* <button onClick={(e) => { this.delete(e, item.id)}}>Delete</button> */}
                                        <a href="#" onClick={(e) => { this.delete(e, item.id)}}>Delete</a>

                                    </div>
                                </div>   
                            );
                     })}
                 </div>
             </div>
         );
     }

}

export default ListCustomers;


