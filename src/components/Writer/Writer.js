import React from 'react';

import styles from './Writer.module.scss';

class Writer extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const text = localStorage.getItem('text') || '';
    this.setState({ text });
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
    localStorage.setItem('text', event.target.value);
    console.log('Done setting');
  }

  render() {
    return (
      <div className={styles.Writer}>
        <div className={styles.Writer__title}>Simple Writer</div>
        <textarea
          type="text"
          placeholder="Type away..."
          value={this.state.text}
          onChange={this.handleChange}
          className={styles.Writer__textarea}
        />
      </div>
    );
  }
}

export default Writer;
