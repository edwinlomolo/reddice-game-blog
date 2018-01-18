import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignupForm from './signupform';
import { userSignupRequest } from '../../actions/signupActions';

class SignUp extends Component {
  render () {

    const { userSignupRequest } = this.props;

    return (
      <div className='row'>
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} />
        </div>
      </div>
    );
  }
}

export default connect(null, { userSignupRequest })(SignUp);
