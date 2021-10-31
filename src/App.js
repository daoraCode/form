import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// import { render } from 'react-dom';

class App extends React.Component {
  // constructor for initializing
  constructor () {
    super();
    console.log(this.props)

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
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // custom methods or React functions
  handleSubmit(e, emailIsValid, passwordValid) {
    e.preventDefault();

    emailIsValid = this.state.emailIsValid;
    passwordValid = this.state.passwordValid;

    if (emailIsValid = true && passwordValid === true) {
      this.setState({ isSubmitted: true })
    }

    console.log('email :', this.state.emailIsValid)
    console.log('password :', this.state.passwordValid)
  }
  
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
    let regex = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/).test(e.target.value);
    if (regex) {
      this.setState({ emailIsValid: true });
    }
    console.log('regex :', e.target.value);
    console.log(regex);
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
    let regexPswd = RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).test(e.target.value);
    if (regexPswd) {
      this.setState({ passwordValid: true });
    }
  }

  handleRememberMeChange() {
    this.setState({ rememberMe: true });
  }


  render() {
    // state
    const { isSubmitted } = this.state;
    const { email, password } = this.state;
    const regex = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    return (
      <div className='container-fluid mx-3 my-5 px-5 py-2 justify-content-center'>
        {isSubmitted ? (
          <>
            <h1 className='logged_title'>Form Submitted</h1>
            <p>{email}</p>
          </>
        ) : (
          <form
            autoComplete='off'
            onSubmit={(e) => this.handleSubmit(e)} 
          >
            <h1 className='main_title'>Login</h1>
            <label className='form-label'>Email adress</label>
            <input
              type='text'
              className={
                email.match(regex)
                  ? 'form-control my-3 is-valid'
                  : 'form-control my-3 is-invalid'
              }
              placeholder='Enter email...'
              value={email}
              onChange={this.handleEmailChange.bind(this)}
              required
            ></input>
            <label className='form-label'>Password</label>
            <input
              type='password'
              className={
                password.length > 7
                  ? 'form-control my-3 is-valid'
                  : 'form-control my-3 is-invalid'
              }
              placeholder='Enter password...'
              value={password}
              onChange={this.handlePasswordChange.bind(this)}
              required
            ></input>
            <div className='custom-control custom-checkbox'>
              <input
                onChange={this.handleRememberMeChange.bind(this)}
                type='checkbox'
                className='custom-control-input'
                defaultChecked={this.state.rememberMe}
              ></input>
              <label
                className='custom-control-label mx-2'
                htmlFor='customControlValidation1'
              >
                Remember me
              </label>
            </div>
            <button type='submit' className='btn btn-primary my-3'>
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default App;
