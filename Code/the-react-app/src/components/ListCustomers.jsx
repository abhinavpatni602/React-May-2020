import React, { Component, PureComponent } from 'react';
import Axios from 'axios';
import './ListCustomers.css';
import CustomerForm from './CustomerForm';
import { Link } from 'react-router-dom';

class ListCustomers extends PureComponent {

    state = {
        data: [],
        addMode: false,
        selectedCustomer: null
    }
    //count = 0;

    constructor(props) {

        super(props);
        //this.url = "https://calm-beach-18228.herokuapp.com/customers";
        this.url = "http://localhost:9000/customers";
        console.log("[ListCustomers constructor]", props)
    }
    //loaded
    async componentDidMount() {
        console.log("[ListCustomers componentDidMount]")
        try {

            const resp = await fetch(this.url);
            const data = await resp.json();
            console.log(data);
            this.setState({
                data: data
            })

        } catch (error) {
            console.log("Error", error)
        }


        // try {
        //     const resp = await Axios.get(this.url);
        //     console.log(resp);
        //     this.setState({
        //         data: resp.data
        //     })

        // } catch (error) {
        //     console.log("Error", error)
        // }
    }

    add = async (nCustomer) => {

        try {

            await Axios.post(this.url, nCustomer);
            alert("Saved...");
            const data = [...this.state.data];
            data.push(nCustomer);
            this.setState({
                data
            });

        } catch (error) {
            console.log("error saving", error)
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
        this.setState({
            addMode: true
        });
    }

    cancelAddNew = () => {
        this.setState({
            addMode: false
        });
    }
    edit = (e, customer) => {

        e.preventDefault();
        this.setState({
            selectedCustomer: customer
        });

        //this.conetnts = (<CustomerForm/>)

    }



    render() {

        console.log("[ListCustomers render]")
        return (
            <div>
                <h2>Customers</h2>
                <p>
                    <a href="#" onClick={this.addNew}>Add New</a>
                </p>

                <div>
                    {this.state.addMode ? <CustomerForm onSave={this.add} onCancel={this.cancelAddNew} /> : null}
                </div>

                <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                    {this.state.data.map((item, index) => {
                        return (
                            <div className="customer" key={item.id}>
                                <p>ID: {item.id}</p>
                                <p>Name: {item.name}</p>
                                <p>Location: {item.location}</p>
                                <div>
                                    {/* <button onClick={(e) => { this.delete(e, item.id)}}>Delete</button> */}
                                    <a href="#" onClick={(e) => { this.delete(e, item.id) }}>Delete</a> &nbsp;
                                    <a href="#" onClick={(e) => { this.edit(e, item) }}>Edit</a> &nbsp;
                                    <Link to={"/customers/" + item.id}>Details</Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div>

                    {this.state.selectedCustomer !== null ?
                        <CustomerForm
                            key={this.state.selectedCustomer.id}
                            data={this.state.selectedCustomer} /> : null}
                </div>
            </div>
        );
    }

    componentWillMount() {
        console.log("[ListCustomers componentWillMount]")
    }
    componentWillReceiveProps() {
        console.log("[ListCustomers componentWillReceiveProps]")
    }
    // shouldComponentUpdate(nProps, nState) {
    //     console.log("[ListCustomers shouldComponentUpdate]");
    //     return true;
    // }
    componentWillUpdate() {
        console.log("[ListCustomers componentWillUpdate]")
    }
    componentDidUpdate() {
        console.log("[ListCustomers componentDidUpdate]")
    }


}

export default ListCustomers;


