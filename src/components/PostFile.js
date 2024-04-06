import Modal from 'react-modal';
import { Button, TextField } from '@mui/material'
import React, { forwardRef, useEffect, useState } from 'react'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};



export const PostFile = (ref,props) => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Button ref={props.ref} onClick={openModal} variant="contained" style={{ marginLeft: '40px', width: '250px', height: '50px' , display:'none'}}>Start a post</Button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>What do you want to talk about?</h2>
                <br />
                <Button variant='outlined' onClick={closeModal}>Close</Button>
                <Button variant='contained' style={{ marginLeft: '20px' }}>Done</Button>
            </Modal>
        </div>
    )
}
