import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import user from '../images/user-circle-svgrepo-com.svg'
import background from '../images/vintage-black-brick-wall-construction-pattern-background_73152-8608.avif'

export const SectionLeft = ({userData}) => {
  const username = userData?._document?.data?.value.mapValue.fields.username.stringValue
  const desicnation = userData._document?.data?.value.mapValue.fields.desicnation.stringValue
  const profil_img = userData._document?.data?.value.mapValue.fields.profil_img.stringValue
  return (
    <div className='p-4'>
      <Card sx={{ maxWidth: 345 }} style={{borderRadius:'20px'}}>
        <CardActionArea >
          <CardMedia
            component="img"
            height="140"
            image={background}
            alt="green iguana"
          />
          <div className='justify-content-center d-flex'>
            <img src={profil_img ?? user} alt='user'  style={{width:'80px', borderRadius:'45px'}} />
          </div>
          <CardContent className='text-center'>
            <Typography gutterBottom variant="h5" component="div">
              {username}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {desicnation}
            </Typography>
            <hr className='my-4'/>
            <Typography variant="body2" color="text.secondary" className='text-start'>
              Connections
            </Typography>
            <Typography variant="body2" color="text.secondary" className='text-start'>
              Invitations
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
