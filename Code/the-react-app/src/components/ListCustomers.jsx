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

     render(){
         return (
             <div>
                 <h2>Customers</h2>
                 <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                     {this.state.data.map((item, index) => {
                            return (
                                <div className="customer" key={item.id}>
                                    <p>ID: {item.id}</p>
                                    <p>Name: {item.name}</p>
                                    <p>Location: {item.location}</p>
                                </div>   
                            );

                     })}
                 </div>
             </div>
         );
     }

}

export default ListCustomers;


