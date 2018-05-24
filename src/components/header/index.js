import React, { Component } from 'react';
import logo from '../../logo.svg';

class Header extends Component {
  render () {
    return <header className='header'>
      <div className={`container is-fluid`}>
        <a href={process.env.REACT_APP_BASE_URL}>
          <img src={logo} alt='logo text' className='logo' />
        </a>
      </div>
    </header>;
  }
}

Header.propTypes = {
};

export default Header;
