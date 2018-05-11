import React from 'react';
import { connect } from 'react-redux'; // Version can be specified in package.json
import 'redux'; // Version can be specified in package.json
import Navigation from './Navigation';
import Login from './Screens/Login';

class AuthStateLayer extends React.Component {
  render() {
    const { auth } = this.props;
    if (auth) {
      return <Navigation />;
    } else {
      return <Login />;
    }
  }
}

export default connect(({ auth }) => ({
  auth,
}))(AuthStateLayer);
