import React, { Component } from 'react'
import { Link } from 'gatsby'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" aria-label="Back to Home">
          <span>Header</span>
        </Link>
      </header>
    );
  }
}

export default Header;
