import React from 'react'
import { Card } from '@mui/material'

export const SectionRight = () => {
  return (
    <div className='p-4'>
      <Card sx={{ maxWidth: 345 }} style={{borderRadius:'20px', height:'400px'}} className='p-3'>
        <p style={{fontWeight:'700', fontSize:'18px'}}>News</p>
      </Card>
    </div>
  )
}
