import React from 'react';

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
        <div>Power Dynamics in Co-Design</div>
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
