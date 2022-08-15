import { Button } from '@mui/material'
import React from 'react'

const MyButton = ({ color, bgColor, text, size }) => {
  return (
    <Button variant='contained'
     sx={{
      color : color ,
      backgroundColor : bgColor , 
      textTransform : 'capitalize',
      borderRadius : '10px',
      '&:hover':{
        backgroundColor : bgColor , 
      }

      }} size={size}>
      {text}
    </Button>
  )
}

export default MyButton