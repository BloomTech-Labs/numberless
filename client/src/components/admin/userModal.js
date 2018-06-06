import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import './modal.css'

const UserModal = props => {
  const toggle = props.toggle;
  const modal = props.modal;
  return (
    <div>
        <Button color="danger" onClick={toggle}>Add User</Button>
        <Modal className="modalBox" isOpen={modal} toggle={toggle}>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter className="footer">
            <Button className="modalButton" color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button className="modalButton" color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </div>
  )
}

export default UserModal;