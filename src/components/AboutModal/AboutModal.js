import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import styles from './AboutModal.module.scss';

class AboutModal extends React.Component {
  render() {
    return (
      <Modal {...this.props} size="lg" aria-labelledby="modal" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This is a simple tool to help track interactions in a conversation.
            <br />
            <br />
            Have fun.
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
