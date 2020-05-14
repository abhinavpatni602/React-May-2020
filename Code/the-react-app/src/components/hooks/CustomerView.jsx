import React from 'react';



const CustomerView = ({ customer, onDelete, index }) => {

    console.log("CustomerView: ", customer);

    const deleteItem =  () => {

        if(onDelete){
            onDelete(index);
        }
    }

    return (


        <div>
            <p>Id      : {customer.id}</p>
            <p>Name    : {customer.name}</p>
            <p>Location: {customer.location}</p>

            <div>
                <button onClick={deleteItem}>Delete</button>
            </div>

        </div>
    )
}

export default CustomerView;
// HOC React 16.3 memo
// Customerview will be updated only if props and state changes 
//export default React.memo(CustomerView);
