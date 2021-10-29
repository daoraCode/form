import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';

// var regex = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/

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
  }

  //! custom methods or React functions
  handleEmailChange(e) {
    console.log('handleEmailChange');
    this.setState({ value: e.target.value });
  }

  handleEmailChange(e) {
    console.log('handleEmailChange');
    this.setState({ value: e.target.value });
  }

  render() {
    //! props
    // const {} = this.props;

    //! states
    const { email } = this.state;

    return (
      <div className='container mx-5 my-5'>
        <form>
        <h1>Login</h1>
          <label for='exampleFormControlInput1' className='form-label'>
            Enter email...
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
            value={email} 
            onChange={this.handleEmailChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default App;
