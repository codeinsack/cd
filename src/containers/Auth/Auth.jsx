import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Wrapper from './AuthStyled';
import { auth } from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error,
  isAuthenticated: state.auth.token !== null,
  authRedirectPath: state.auth.authRedirectPath,
});

const mapDispatchToProps = dispatch => ({
  onAuth: (email, password, isSignup) => dispatch(auth(email, password, isSignup)),
});

@connect(mapStateToProps, mapDispatchToProps)

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Mail Address',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSignup: true,
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };

  inputChangedHandler = (event, controlName) => {
    const { controls } = this.state;

    const updatedControls = {
      ...controls,
      [controlName]: {
        ...controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, controls[controlName].validation),
        touched: true,
      },
    };
    this.setState({
      controls: updatedControls,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const { onAuth } = this.props;
    const { isSignup } = this.state;

    onAuth(this.state.controls.email.value, this.state.controls.password.value, isSignup);
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => ({
      isSignup: !prevState.isSignup,
    }));
  };

  render() {
    const { controls, isSignup } = this.state;
    const { loading, error, isAuthenticated } = this.props;
    const formElementsArray = [];

    for (const key in controls) {
      formElementsArray.push({
        id: key,
        config: controls[key],
      });
    }

    let form = formElementsArray.map(el => (
      <Input
        key={el.id}
        elementType={el.config.elementType}
        elementConfig={el.config.elementConfig}
        value={el.config.value}
        invalid={!el.config.valid}
        shouldValidate={el.config.validation}
        touched={el.config.touched}
        changed={event => this.inputChangedHandler(event, el.id)}
      />
    ));

    if (loading) {
      form = <Spinner />;
    }

    let errorMessage = null;

    if (error) {
      errorMessage = (
        <p>{error.message}</p>
      );
    }

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <Wrapper>
        {errorMessage}
        <h2>{isSignup ? 'Create a new account' : 'Please, log in'}</h2>
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="success">{isSignup ? 'SIGN UP' : 'SIGN IN'}</Button>
        </form>
        <Button
          btnType="danger"
          clicked={this.switchAuthModeHandler}
        >
          SWITCH TO {isSignup ? 'LOG IN' : 'REGISTER'}
        </Button>
      </Wrapper>
    );
  }
}

export default Auth;
