import React, { Component } from 'react';
import map from 'lodash/map';

import timezones from '../../data/timezones';

class SignupForm extends Component {
  constructor (props) {
    super (props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e) {
    this.setState({ [e.target.name] : e.target.value })
  }

  onSubmit (e) {
    e.preventDefault();
    console.log(this.state);
  }

  render () {
    const options = map(timezones, (val, key) => 
      <option value={val} key={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            type="text"
            name="username"
            className="form-control"
            onChange={this.onChange}
          />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password Confirmation</label>
          <input
            type="password"
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Timezone</label>
          <select
            className="form-control"
            name="timezone"
            onChange={this.onChange}
            value={this.state.timezone}
            >
              <option value="" disabled>Choose Your Timezone</option>
              {options}
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
} 

export default SignupForm;
