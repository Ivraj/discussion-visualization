import React from 'react';

import logo from '../../images/logo.jpg';
import AboutModal from '../AboutModal';

import styles from './Navbar.module.scss';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { showModal: false };
  }

  render() {
    return (
      <div className={styles.Navbar}>
        <a href="https://astrohaus.com/">
          <img className={styles.Navbar__logo} src={logo} />
        </a>
        <div className={styles.Navbar__links}>
          <div
            className={styles.Navbar__link}
            onClick={() => this.setState({ showModal: true })}
          >
            About
          </div>
        </div>
        <AboutModal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        />
      </div>
    );
  }
}

export default Navbar;
