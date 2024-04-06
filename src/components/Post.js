import React, {forwardRef, useEffect, useState} from 'react'
import Modal from 'react-modal';
import {Button, TextField} from '@mui/material'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, database } from '../firebase/setUp';

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

export const Post = (ref,props) => {


    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'gray';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [text, setText] = useState('')

  const [userData, setUserData] = useState([])

  const getUser = () => {
    setTimeout(async () => {
        try {
        const userDoc = doc(database, 'Users', auth.currentUser?.uid)
            const data = await getDoc(userDoc)
            setUserData(data)
    } catch (err) {
        console.error(err);
    }
    }, 2000);
}

useEffect(() => {
    getUser()
}, [])

const autoRefresh = () => {
  setTimeout(() => {
    window.location.reload()
  }, 6000)
}

  const addPost = async () => {
    const postDocument = doc(database, 'Users', auth.currentUser?.uid)
    const postRef = doc(postDocument, 'Posts', `${Math.random()}`)
    setIsOpen(false)
    autoRefresh()
    try {
      await setDoc(postRef, {
        textPost: text,
        username: userData._document?.data?.value.mapValue.fields.username.stringValue,
        designation: userData._document?.data?.value.mapValue.fields.desicnation.stringValue,
        profilImage: userData._document?.data?.value.mapValue.fields.profil_img.stringValue,
        id: auth.currentUser?.uid
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <Button ref={props.ref} onClick={openModal} variant="contained" style={{marginLeft:'40px', width:'250px', height:'50px'}}>Start a post</Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>What do you want to talk about?</h2>
        <TextField
          onChange={(e)=> setText(e.target.value)}
          id="outlined-basic"
          label="Type here..."
          multiline
          variant='outlined'
          rows={4}
          style={{marginBottom:'20px', width:'500px'}}
        /><br/>
        <Button variant='outlined' onClick={closeModal}>Close</Button>
        <Button variant='contained' onClick={addPost} style={{marginLeft:'20px'}}>Done</Button>
      </Modal>
    </div>
  )
}

export default forwardRef(Post)