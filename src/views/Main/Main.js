import React from 'react';
import styles from './Main.module.scss';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DiscussionGraph from '../../components/DiscussionGraph/DiscussionGraph';

class Main extends React.Component {
  render() {
    return (
      <div className={styles.Main}>
        <Navbar />
        <DiscussionGraph />
        <Footer />
      </div>
    );
  }
}

export default Main;
