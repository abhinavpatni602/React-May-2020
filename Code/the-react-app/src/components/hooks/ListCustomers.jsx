import React, { useState, useEffect, useCallback, Fragment } from 'react';
import Axios from 'axios';

import '../ListCustomers.css'
import CustomerForm from './CustomerForm';
import CustomerView from './CustomerView';



const ListCustomers = (props) => {

    const [data, setData] = useState([]);
    const [addMode, setAddMode] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const url = "http://localhost:9000/customers";


    // runs only once
    useEffect(() => {
        console.log("in effect");



        (async function () {

            try {
                const response = await Axios.get(url);
                console.log("success", response);
                const customers
                    = response.data;
                setData(customers);
                setLoaded(true);

            } catch (error) {
                console.log("error", error)
            }

        })();



    }, []);

    const deleteCustomer = async (index) => {

        try {

            const deleteUrl = url + "/" + data[index].id;
            await Axios.delete(deleteUrl);
            alert("deleted");
            //State has to be considered as immutable
            const updatedCustomers = [...data];
            updatedCustomers.splice(index, 1);
            setData(updatedCustomers);
        } catch (error) {
            alert("Failed to delete");
        }
    };


    const addNew = (evt) => {

        evt.preventDefault();
        setAddMode(true);
    }

    const addCustomer = async (customer) => {
        try {
            const response = await Axios.post(url, customer);
            alert("Saved");
            const updatedCustomers = [...data];
            updatedCustomers.push(customer);

            setData(updatedCustomers)

        } catch (error) {
            alert("Failed to save");
        }
    }

    const closeNewForm = () => {
        setAddMode(false);
    }

    function renderCustomers() {
        return data.map((customer, index) => {
            return (
                <div className="customer" key={customer.id}>

                    <div>
                        <p>Id      : {customer.id}</p>
                        <p>Name    : {customer.name}</p>
                        <p>Location: {customer.location}</p>

                        <div>
                            <button onClick={() => deleteCustomer(index)}>Delete</button>
                        </div>

                    </div>

                    {/* <CustomerView
                        customer={customer}
                        index={index}
                        onDelete={deleteCustomer}
                        /> */}
                </div>

            )
        });
    }

    return (
        <div>
            <h2>List Customers with Hooks</h2>

            {loaded ? <Fragment>
                <div>
                    <a href="#" onClick={addNew}>Add New</a>
                </div>
                {addMode ? <CustomerForm
                    onSave={addCustomer}
                    onCancel={closeNewForm} /> : null}


                <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                    {data.length !== 0 ? renderCustomers() : <p>No Records</p>}
                </div>


            </Fragment> : <div>Loading...</div>}

        </div>
    );
}

export default ListCustomers;