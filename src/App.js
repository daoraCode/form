import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import { render } from 'react-dom';

class App extends React.Component {
  //! constructor to initialize states objects
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

    //! binding
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // get rid of refreshing page
  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.email);
    e.preventDefault();
  }

  //! custom methods or React functions
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
    console.log(e.target.value);
    var regex = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value);
    if(regex) {
      this.setState({ passwordValid: true}) 
    }
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
    console.log(e.target.value);
  }

  render() {
    //! props
    // const {} = this.props;

    //! states
    const { email, password } = this.state;

    return (
      <div className='container mx-3 my-5 px-5 py-5 justify-content-center'>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <h1>Login</h1>
          <label className='form-label my-3'>
            Email adress
          </label>
          <input
            type='text'
            className='form-control my-3'
            id='exampleFormControlInput1'
            placeholder='Enter email...'
            value={email}
            onChange={this.handleEmailChange}
            required
          ></input>
          <label className='form-label my-3'>
            Password
          </label>
          <input
            type='text'
            className='form-control my-3'
            id='exampleFormControlInput1'
            placeholder='Enter password...'
            value={password}
            onChange={this.handlePasswordChange}
            required
          ></input>
          <button type="submit" className="btn btn-primary my-3">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
