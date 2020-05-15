import React, {Component} from 'react';
import { connect } from "react-redux";
//import {createINCAction, createDECRAction} from '../redux/actionCreators';
import * as actionsCreators from '../redux/actionCreators';

class ReduxCounter extends Component {

     render(){
         return (
             <div>
                 <h3>Redux Counter</h3>
                 <h4>Count: {this.props.ctr}</h4>
                 <div>
                     <button onClick={this.props.inc}>Inc</button> &nbsp;
                     <button onClick={this.props.decr}>Decr</button>

                     <button onClick={this.props.fetch}>Fetch Customers</button> &nbsp;
                 </div>
                 <div>
                     {this.props.customers.length === 0 ? <div>No Data</div> : (
                         this.props.customers.map(item => {
                             return (
                                 <div key={item.id }>
                                      <p>{item.name}</p>  
                                 </div>
                             )
                         })
                     )}
                 </div>
             </div>
         );
     }

}
// var hoc = connect(mapStateToProps, mapDispatchToProps);
// var ConnectedComponent = hoc(ReduxCounter);
// export default ConnectedComponent;

// Mapping the redux State to the component Props
const mapStateToProps = (state) => {

    return {
        ctr: state.count,
        customers: state.customers
    }
}
// Mapping the redux dispatch to the component props
const mapDispatchToProps = (dispatch) => {

    return {
        //inc : () => {dispatch({type: "INC_CTR"})},
        //decr : () => {dispatch({type: "DECR_CTR"})}

        inc: () => {dispatch(actionsCreators.createINCAction())},
        decr: () => {dispatch(actionsCreators.createDECRAction())},
        fetch: () => {dispatch(actionsCreators.createFCAction())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);

// <ReduxCounter ctr={reduxState.count} inc={() => {dispatch({type: "INC_CTR"})}} decr={}/>