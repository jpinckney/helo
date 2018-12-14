import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

export default function Nav() {
  return (
    <div>
      <Link to='/dashboard'>
        <button>Home</button>
      </Link>
      <Link to='/post/:postid'>
        <button>New Post</button>
      </Link>
      <Link to='/'>
        <button>Logout</button>
      </Link>


    </div>
  )
}

/**
 * import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import React, { Component } from 'react'


class Nav extends Component() {
  render() {

    return (
      <div>
        <Link to='/dashboard'>
          <button>Home</button>
        </Link>
        <Link to='/post/:postid'>
          <button>New Post</button>
        </Link>
        <Link to='/'>
          <button>Logout</button>
        </Link>


      </div>
    )
  }
}
const mapState = (state) => state
export default connect(mapState)(Nav)
 */