import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './modal.css'

const customStyles = {
  content: {
    border: '3px solid ##0C0B4B' ,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)


function Popup() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className='modal-button' onClick={openModal}>Click Here</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <button className='modal-close' onClick={closeModal}>x</button>
        <div className="modal-content">
        <div className='modal-content1'><a href=""> Click Here</a> to file your Complaint for lost & found</div>
        <div className='modal-content2'>Want us to file your complaint ? <a href=""> Click Here </a></div>
        </div>
      </Modal>
    </div>
  );
}

export default Popup;