import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest } from '../actions/users';
import NewUserForm from './NewUserForm';
import UsersList from './UsersList';

class App extends Component {

  constructor( props ) {
    super( props );
    this.props.getUsersRequest();
  }

  handleSubmit=({firstName, lastName}) => {
    this.props.createUserRequest({
      firstName,
      lastName
    })
  };

  handleDeleteUserClick = (userId) => {
    this.props.deleteUserRequest( userId );
  };

  render() {
    const users = this.props.users;
    console.log(users);
    return (
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <NewUserForm onSubmit={this.handleSubmit} />
        <UsersList onDeleteUser={this.handleDeleteUserClick} users={users.items} />
      </div>
    )
  }
}

export default connect(({users}) => ({users}), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest
})(App);
