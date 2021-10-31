import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { render } from 'react-dom';

class App extends React.Component {
  // constructor for initializing
  constructor () {
    super();
    // initial state
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
      emailIsValid: false,
      passwordValid: false,
      isSubmitted: false,
      firstName: '',
      lastName: ''
    };

    // bindings
    // Optimizing the methods with bindings will ensure a correct bind between a class and the method
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  // If emailIsValid and paswordIsValid get a 'true' value then isSubmitted will be 'true'
  handleSubmit(e, emailIsValid, passwordValid) {
    e.preventDefault();
    emailIsValid = this.state.emailIsValid; // parameter to call the data state emailIsValid
    passwordValid = this.state.passwordValid; // paramater to call the data state passwordValid
    if (emailIsValid === true && passwordValid === true) {
      this.setState({ isSubmitted: true })
    }
  }

  // this method will be used to get the email input value.
  // RegExp constructor
  // if RegExep is true (test()) then change the data state emailIsValid to 'true'
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
    let regex = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/).test(e.target.value); 
    if (regex) { 
      this.setState({ emailIsValid: true });
    }
  }

  // To handle the password, I used the RegExp into this function for the password input
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

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  render() {

    // data state
    const { isSubmitted, email, password, firstName, lastName } = this.state;
    // for email pattern
    const regex = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    return (
      <div className='container-fluid mx-3 my-5 px-5 pb-5 pt-5 justify-content-center'>
        {isSubmitted ? (
          <>
            <h1 className='logged_title'>Form Submitted</h1>
            <p>{email}</p>
          </>
        ) : (
          <form
            autoComplete='off'
            onSubmit={this.handleSubmit.bind(this, e)} // passing the event (e) parameter
          >
            <h1 className='main_title'>Login 🪁</h1>
            <label className='form-label'>Email adress • Full name</label>
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
            <input type="text"
              className={
                firstName.length > 3
                  ? 'form-control my-3 is-valid'
                  : 'form-control my-3 is-invalid'
              }
              placeholder='Enter first name...'
              value={firstName}
              onChange={this.handleFirstNameChange.bind(this)}
              required
            ></input>
            <input type="text"
              className={
                lastName.length > 3
                  ? 'form-control mb-5 is-valid'
                  : 'form-control mb-5 is-invalid'
              }
              placeholder='Enter last name...'
              value={lastName}
              onChange={this.handleLastNameChange.bind(this)}
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
