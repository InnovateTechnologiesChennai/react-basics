import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <>
    <nav>
          <ul>
            <li><Link to="/">Props</Link></li>
            <li><Link to="/state">State</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/context">Context</Link></li>
          </ul>
        </nav>
    </>
  )
}

export default NavigationBar