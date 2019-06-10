import React from 'react';

import styles from './Footer.module.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.Footer}>
        <a href="https://github.com/ivraj" className={styles.Footer__links}>
          by Ivraj Seerha
        </a>
      </div>
    );
  }
}

export default Footer;
