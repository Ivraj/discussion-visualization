import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import styles from './AboutModal.module.scss';

class AboutModal extends React.Component {
  render() {
    return (
      <Modal {...this.props} size="lg" aria-labelledby="modal" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            About Simple Writer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This is a simple writing application that let's you type out your
            thoughts. Your work is autosaved.
            <br />
            <br />
            Happy writing.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={styles.AboutModal__button}
            onClick={this.props.onHide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AboutModal;
