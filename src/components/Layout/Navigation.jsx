import React, { Component } from 'react';
import { Link } from 'gatsby';
import './Navigation.scss';


class Navigation extends Component {
  render() {
    const {
      location,
      navigation,
    } = this.props;
    const { pathname: currentPath } = location;
    return (
      <nav className="navigation" role="navigation">
        <div className="nav-container">
          <ul className="nav-items">
            {navigation.map((item) => {
              const {
                title,
                page_link: pageLink,
              } = item;
              const { slug } = pageLink;
              const { text } = title;
              if (slug === 'home') return null;
              const isActive = Boolean(`/${slug}/` === currentPath) || Boolean(currentPath === '/' && slug === 'home');
              return (
                <li key={slug} className={`nav-item ${isActive ? 'active' : ''}`}>
                  <Link
                    to={`/${slug}/`}
                    aria-label={`Navigate to ${text} page`}
                  >
                    <span>{text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
