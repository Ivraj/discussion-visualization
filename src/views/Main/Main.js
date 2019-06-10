import React from 'react';
import styles from './Main.module.scss';

import Navbar from '../../components/Navbar';
import Writer from '../../components/Writer';
import Footer from '../../components/Footer';

class Main extends React.Component {
  render() {
    return (
      <div className={styles.Main}>
        <Navbar />
        <p>The rest of the content.</p>
        <Footer />
      </div>
    );
  }
}

export default Main;
