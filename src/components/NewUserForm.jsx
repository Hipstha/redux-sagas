import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class NewUserForm extends Component {

  state = {
    firstName: '',
    lastName: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    });

    this.setState({
      firstName: '',
      lastName: ''
    });

  };

  handleFirstNameChange = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  handleLastNameChange = e => {
    this.setState({
      lastName: e.target.value
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>
            First name
          </Label>
          <Input placeholder="First name" 
                 required
                 onChange={this.handleFirstNameChange} 
                 value={this.state.firstName}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Label>
            Last name
          </Label>
          <Input placeholder="Last name" 
                 required
                 onChange={this.handleLastNameChange} 
                 value={this.state.lastName}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Button style={{width:'100%', display: 'block'}} outline type="submit" color="primary">
            Create
          </Button>
        </FormGroup>
        <br />
      </Form>
    )
  }
};

export default NewUserForm;