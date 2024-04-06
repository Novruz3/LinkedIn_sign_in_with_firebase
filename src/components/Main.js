import React, { useState } from 'react'
import { useEffect } from 'react'
import {Navbar} from './Navbar'
import {Home} from './Home'
import { doc, getDoc } from 'firebase/firestore';
import { auth, database } from '../firebase/setUp';

export const Main = () => {
    const [userData, setUserData] = useState([])

    const getUser = () => {
        setTimeout(async () => {
            try {
            const userDoc = doc(database, 'Users',auth.currentUser?.uid)
                const data = await getDoc(userDoc)
                setUserData(data)
        } catch (err) {
            console.error(err);
        }
        }, 10000);
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div >
            <Navbar style={{marginTop:'0px'}} userData={userData} />
            <Home userData={userData}/>
        </div>
    )
}
