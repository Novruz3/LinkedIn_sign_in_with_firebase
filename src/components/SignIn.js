import React, { useState } from 'react'
import logo from '../images/logo.png'
import boy_comp from '../images/images.jfif'
import { signInWithPopup } from 'firebase/auth'
import { TextField, Button } from '@mui/material'
import { auth, googleProvider,database } from '../firebase/setUp'
import { doc, setDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [desicnation, setDesicnation] = useState('')

    const addUser = async () => {
        const userRef = doc(database,'Users',auth.currentUser?.uid)
        try {
            await setDoc(userRef, {
                username: username,
                email: auth.currentUser?.email,
                desicnation: desicnation,
                profil_img:auth.currentUser?.photoURL
            })
        } catch (error) {
            console.error(error);
        }
    }

    const signInwithGoogle = async () => {
        !username && toast.warning('Please enter username')
        try {
            username && await signInWithPopup(auth, googleProvider)
            username && addUser()
            navigate('/main')
        } catch (err) {
            console.error(err);
        }
    } 

    return (
        <div className='row ' style={{backgroundColor:'white'}}>
            <div className='col-12 col-md-6' style={{ paddingLeft: '80px' }}>
                <ToastContainer autoClose={2000} position='top-right'/>
                <img className='mt-2' src={logo} alt='linkedIn' style={{ width: '200px' }} />
                <h1 className='mt-5' style={{color:'blue', fontSize:"70px", fontWeight:'100'}}>Find jobs through this clone</h1>
                <TextField onChange={(e) => setUsername(e.target.value)} className='mt-5' id="outlined-basic" label="Username" variant="outlined" style={{width:'350px', marginBottom:'-20px'}}/>
                <TextField onChange={(e) => setDesicnation(e.target.value)} className='mt-5' id="outlined-basic" label="Desicnation" variant="outlined" style={{width:'350px'}}/><br/>
                <Button onClick={signInwithGoogle} className='mt-4' variant="contained" style={{width:'350px', height:'50px', borderRadius:'20px'}}>SignIn</Button>
            </div>
            <div className='col-12 col-md-6 mt-5'>
                <img src={boy_comp} alt='frofile' className='mt-5' style={{width:'450px'}} />
            </div>
        </div>
    )
}

