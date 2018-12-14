import React, { Component } from 'react'
import axios from 'axios'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  async login() {
    let { username, password } = this.state
    let res = await axios.post('/auth/login', { username, password })
    this.setState({ username: '', password: '' })
    if (res.data.Loggedin) {
      this.props.history.push('/dashboard')
    }

  }

  async register() {
    let { username, password } = this.state
    let res = await axios.post('/auth/register', { username, password })
    console.log(res)
    this.setState({ username: '', password: '' })
    if (res.data.Loggedin) {
      console.log(res.data)
      this.props.history.push('/dashboard')
    }
  }


  render() {
    return (
      <div>
        <input placeholder='User Name'
          onChange={ (e) => this.setState({ username: e.target.value }) }
          type='text'
          value={ this.state.username }></input>
        <input placeholder='Password'
          onChange={ (e) => this.setState({ password: e.target.value }) }
          type='text'
          value={ this.state.password }></input>
        <button onClick={ () => this.login() }>Login</button>
        <button onClick={ () => this.register() }>Register</button>
      </div>
    )
  }
}

export default Auth