import React, { Component } from 'react'

export class Search extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       keyword: ""
    }
  }

  SearchUser = (e) => {
    this.setState({
        keyword: e.target.value
    })
  }

  SubmitSearch = (e) => {
    e.preventDefault();

    if(this.state.keyword === ""){
        this.props.displayAlert("Please Enter Word!", "danger")
    } else {
        this.props.searchUsers(this.state.keyword)
        this.setState({keyword:''})
    }
    
  } 
    
  render() {
    return (
        <div className='container my-3'>
            <form onSubmit={this.SubmitSearch}>
                <div className='input-group'>
                    <input type='text'value={this.state.keyword} onChange={this.SearchUser} className='form-control' placeholder='Key'></input>
                    <button type='submit' className='btn btn-primary'>Search</button>
                </div>
            </form>
            {
                this.props.showClearButton && <button onClick={this.props.clearResults} className='btn btn-outline-danger mt-2 btn-block'>Delete Results</button>
            }           
        </div>
    )
  }
}

export default Search
