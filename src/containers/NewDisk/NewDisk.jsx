import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Wrapper from './NewDiskStyled';
import { createNewDisk } from '../../store/actions/newDisk';
import Spinner from '../../components/UI/Spinner/Spinner';

const mapStateToProps = state => ({
  loading: state.newDisk.loading,
  success: state.newDisk.success,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  onCreateNewDisk: (diskData, token) => dispatch(createNewDisk(diskData, token)),
});

@connect(mapStateToProps, mapDispatchToProps)

class NewDisk extends Component {
  state = {
    diskForm: {
      title: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Title',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      year: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Year',
        },
        value: '',
        validation: {
          required: true,
          minLength: 4,
          maxLength: 4,
          isNumeric: true,
        },
        valid: false,
        touched: false,
      },
      author: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Author',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      genre: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Genre',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      category: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'music', displayValue: 'Music' },
            { value: 'movie', displayValue: 'Movie' },
            { value: 'game', displayValue: 'Game' },
          ],
        },
        value: 'music',
        validation: {},
        valid: true,
      },
      image: {
        elementType: 'input',
        elementConfig: {
          type: 'file',
          placeholder: 'Image',
        },
        value: '',
        validation: {},
        valid: true,
      },
    },
    formIsValid: false,
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

  inputChangedHandler = (event, inputId) => {
    const { diskForm } = this.state;
    const updatedDiskForm = {
      ...diskForm,
    };
    const updatedFormElement = {
      ...updatedDiskForm[inputId],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value,
      updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedDiskForm[inputId] = updatedFormElement;

    let formIsValid = true;
    Object.keys(updatedDiskForm).forEach((key) => {
      formIsValid = updatedDiskForm[key].valid && formIsValid;
    });

    this.setState({ diskForm: updatedDiskForm, formIsValid });
  };

  createNewDiskHandler = (e) => {
    e.preventDefault();
    const { onCreateNewDisk } = this.props;
    const { diskForm } = this.state;

    const formData = {};
    Object.keys(diskForm).forEach((key) => {
      formData[key] = diskForm[key].value;
    });

    onCreateNewDisk(formData);
  };

  render() {
    const { diskForm, formIsValid } = this.state;
    const { loading, success } = this.props;
    const formElementsArray = [];

    if (success) {
      return <Redirect to="/" />;
    }

    Object.keys(diskForm).forEach((key) => {
      formElementsArray.push({
        id: key,
        config: diskForm[key],
      });
    });

    let form = (
      <form onSubmit={this.createNewDiskHandler}>
        {formElementsArray.map(el => (
          <Input
            key={el.id}
            elementType={el.config.elementType}
            elementConfig={el.config.elementConfig}
            value={el.config.value}
            invalid={!el.config.valid}
            changed={event => this.inputChangedHandler(event, el.id)}
            shouldValidate={el.config.validation}
            touched={el.config.touched}
          />
        ))}
        <Button disabled={!formIsValid} btnType="success">CREATE</Button>
      </form>
    );
    if (loading) {
      form = <Spinner />;
    }
    return (
      <Wrapper>
        <h4>Enter new Disk Data</h4>
        {form}
      </Wrapper>
    );
  }
}

export default NewDisk;
