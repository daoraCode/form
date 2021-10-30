import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// import { render } from 'react-dom';

class App extends React.Component {
  // constructor for initializing
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      rememberMe: false,
      emailIsValid: false,
      passwordValid: false,
      isSubmitted: false,
    };

    // bindings
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this);
  }

  // get rid of refreshing page

  // custom methods or React functions
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
    // console.log(e.target.value);
    let regex = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    regex.test(e.target.value);
    if (regex) {
      this.setState({ emailIsValid: true });
    }
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
    if (e.length >= 5) {
      this.setState({ passwordValid: true });
    }
  }

  handleRememberMeChange() {
    this.setState({ rememberMe: true });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    // props
    // const {} = this.props;

    // states
    const { email, password } = this.state;

    // let emailValidator = email.message('email', this.state.email, 'required|email');

    return (
      <div className='container-fluid mx-3 my-5 px-5 py-5 justify-content-center'>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          autoComplete='off'
          required
        >
          <h1 className='main_title'>Login</h1>
          <label className='form-label my-3'>Email adress</label>
          <input
            type='text'
            className={
              email.match(/[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)
                ? 'form-control my-3 is-valid'
                : 'form-control my-3 is-invalid'
            }
            placeholder='Enter email...'
            value={email}
            onChange={this.handleEmailChange.bind(this)}
            required
            isInvalid
          ></input>
          <label className='form-label my-3'>Password</label>
          <input
            type='password'
            className={
                password.length >= 5
                ? 'form-control my-3 is-valid'
                : 'form-control my-3 is-invalid'
            }
            placeholder='Enter password...'
            value={password}
            onChange={this.handlePasswordChange.bind(this)}
            required
            isInvalid
          ></input>
          <div className='custom-control custom-checkbox mb-3'>
            <input
              type='checkbox'
              className='custom-control-input'
              required
            ></input>
            <label
              onChange={this.handleRememberMeChange.bind(this)}
              className='custom-control-label mx-2'
              for='customControlValidation1'
            >
              Remember me
            </label>
          </div>
          <button type='submit' className='btn btn-primary my-3'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
