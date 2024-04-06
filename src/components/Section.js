import React, { useEffect, useRef, useState } from 'react'
import { Card } from '@mui/material'
import user from '../images/user-circle-svgrepo-com.svg'
import { CardMedia } from '@mui/material'
import gallery from '../images/gallery-svgrepo-com (1).svg'
import video from '../images/video-svgrepo-com.svg'
import file from '../images/file-svgrepo-com.svg'
import lion from '../images/078_Desktop Wallpapers  HD Part (161).jpg'
import { Post } from './Post'
import { collection, doc, getDocs } from 'firebase/firestore'
import { auth, database } from '../firebase/setUp'
import { PostFile } from './PostFile'

export const Section = ({ userData }) => {
  const postRef = useRef(null)
  const filePostRef = useRef(null)
  const profil_img = userData._document?.data?.value.mapValue.fields.profil_img.stringValue

  const [post, setPost] = useState([])

  const getPost = () => {
    setTimeout(async () => {
      try {
        const postDocument = doc(database, 'Users', auth.currentUser?.uid)
        const postRef = collection(postDocument, 'Posts')
        const data = await getDocs(postRef)
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }))
        setPost(filteredData)
      } catch (err) {
        console.error(err)
      }
    }, 10000);
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div className='p-4'>
      <Card style={{ borderRadius: '20px', height: '150px' }} className='p-3'>
        <div className='d-flex justify-content-center'>
          <img src={profil_img ?? user} alt='user' style={{ width: '70px', borderRadius: '40px' }} />
          <Post ref={postRef} />
          <PostFile ref={filePostRef} />
        </div>
        <div className='d-flex justify-content-between mx-5'>
          <img onClick={()=> filePostRef.current?.click()} src={gallery} alt='gallery' style={{ width: '30px' }} />
          <img onClick={()=> filePostRef.current?.click()} src={video} alt='video' style={{ width: '40px' }} />
          <img onClick={()=> filePostRef.current?.click()} src={file} alt='file' style={{ width: '30px' }} />
        </div>
      </Card>
      {
        post.map((val) => {
          return (
            <Card style={{ borderRadius: '20px' }} className=' mt-4' key={val.id}>
              <div className='d-flex p-3'>
                <img src={profil_img ?? user} alt='user' style={{ width: '60px', height: '60px', borderRadius: '30px' }} />
                <div className='d-block mx-4'>
                  <p style={{ fontSize: '18px', marginTop: '5px', marginBottom: '0px' }}>
                    {val.username}
                  </p>
                  <p style={{ fontSize: '18px', color: 'gray' }}>
                    {val.designation}
                  </p>
                </div>
              </div>
              <p style={{ fontWeight: '700', fontSize: '16px' }} className='mx-4'>{val.textPost}</p>
              {
                post.img && <CardMedia
                component='img'
                image={lion}>
              </CardMedia>
              }
            </Card>
          )
        })
      }

    </div>
  )
}
