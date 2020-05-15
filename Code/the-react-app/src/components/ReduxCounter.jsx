import React, {Component} from 'react';
import { connect } from "react-redux";

class ReduxCounter extends Component {

     render(){
         return (
             <div>
                 <h3>Redux Counter</h3>
                 <h4>Count: {this.props.ctr}</h4>
             </div>
         );
     }

}

// var hoc = connect(mapStateToProps);
// var ConnectedComponent = hoc(ReduxCounter);
// export default ConnectedComponent;

// Mapping the redux State to the component Props
const mapStateToProps = (state) => {

    return {
        ctr: state.count
    }

}
export default connect(mapStateToProps)(ReduxCounter);

// <ReduxCounter ctr={reduxState.count}/>