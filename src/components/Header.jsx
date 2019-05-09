import React, { Component } from 'react';
import { Logo, Navigation, Wrapper } from '.';

class Header extends Component {
  render() {
    const {
      location,
      navigation,
    } = this.props;
    return (
      <header className="header">
        <Wrapper>
          <Logo />
          <Navigation
            navigation={navigation}
            location={location}
          />
        </Wrapper>
      </header>
    );
  }
}

export default Header;
