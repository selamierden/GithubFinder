import React, { Component } from 'react'


export class GitUser extends Component {
      
  render() {
    const { avatar_url,login,html_url} = this.props.user;
    return (
      <div className='card mb-3'>
        <div className='row g-0'>
            <div className='col-md-3'>
                <img className='img-fluid rounded start avatar' src={ avatar_url} alt={login} />
            </div>
            <div className='col-md-9'>
              <div className='card-body'>
                <h3 className='card-title'>{login}</h3> <hr/>
                <a href={html_url} target='_blank' rel='noreferrer'  className='btn btn-primary'>Github Profile</a>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default GitUser
