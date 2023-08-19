import React, { Component } from 'react'
import GitUser from "./GitUser"
import Loading from './Loading'

export class UserList extends Component {
     
  render() {
    if( this.props.loading) {
      return <Loading/>;
    }
    return (
      <div>
        { this.props.users.map(user => (
            <GitUser user={user} key={user.id} />
        ))}
      </div>
    )
  }
}

export default UserList
