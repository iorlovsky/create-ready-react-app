const simpleComponentJsx =
`
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {testAction} from "../modules/actions/app";

class SimpleComponent extends React.Component {

  testRedux = () => {
    this.props.testAction("An action has been dispatched. The global state's been changed.");
  };

  render() {
    return (
      <div className='container simple-component'>
        <div className='display-3 text-center'>It's a preconfigured React app</div>
        <div className='lead'>You should delete this component and start to write your own</div>

        {!this.props.global_test_state ?
          <button className="btn btn-primary" onClick={this.testRedux}>Test Redux configuration</button>
          :
          <div className='text-success'>{this.props.global_test_state}</div>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    global_test_state: state.app.global_test_state
  }),
  dispatch => bindActionCreators({testAction}, dispatch)
)(SimpleComponent);
`;

module.exports = simpleComponentJsx;