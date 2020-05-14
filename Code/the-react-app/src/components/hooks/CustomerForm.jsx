import React, { useState, useRef, useEffect } from 'react';


const CustomerForm = (props) => {

    const [customer, setCustomer]= useState({id: 0, name: "", location: ""});

    const nameInputRef = useRef(null);
    const idInputRef = useRef(null);
    //console.log("CustomerForm", props);


    useEffect(() => {
        //console.log("name effect")
        if(nameInputRef.current.validity.valid){
            nameInputRef.current.style="";
        }
        else{
            nameInputRef.current.style="border: 2px solid red";
        }

    }, [customer.name]);

    useEffect(() => {
        //console.log("id effect")
        if(idInputRef.current.validity.valid){
            idInputRef.current.style="";
        }
        else{
            idInputRef.current.style="border: 2px solid red";
        }

    }, [customer.id]);

    const change = (evt, propName) => {
        const value = evt.target.value;
        const updatedCustomer = {...customer};
        if(propName === "id"){
            updatedCustomer[propName] = value ? parseInt(value): 0;
        }
        else{
            updatedCustomer[propName] = value;
        }
        setCustomer(updatedCustomer);
    }

    const save = () => {

        if(props.onSave){
            if(idInputRef.current.validity.valid && nameInputRef.current.validity.valid){
                props.onSave(customer);
                setCustomer({id:0, name: "", location: ""});
            }
            else{
                alert("Please resolve the errors");
            }
        }
       

    }
    const cancel = () => {
        props.onCancel();
    }

    return (
        <div>
            <fieldset>
                    <p>ID</p>
                    <div>
                        <input type="number" 
                            value={customer.id}
                            onChange={(e) => change(e, "id")}
                            ref={idInputRef}
                            required min="1"/>
                    </div>
                    <p>Name</p>
                    <div>
                        <input value={customer.name}
                                    onChange={(e) => change(e, "name")} 
                                    ref={nameInputRef}
                                    required pattern="[a-zA-Z]{2,}"/>
                    </div>
                    <p>Location</p>
                    <div>
                        <input value={customer.location}
                                    onChange={(e) => change(e, "location")}/>
                    </div>
                    <div>
                        <button onClick={save}>Save</button>&nbsp;
                        <button onClick={cancel}>Cancel</button>
                    </div>


                 </fieldset>
        </div>
    )
}

export default CustomerForm;