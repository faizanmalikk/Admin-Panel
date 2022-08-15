import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = ({category , title}) => {
  return (
    <Box marginBottom={'1rem'}>
      <Typography fontSize='26px' color='#9e9e9e' textAlign={{xs:'center',sm:'unset'}}>{category}</Typography>
      <Typography fontSize='35px' color='black' fontWeight={'bold'} textAlign={{xs:'center',sm:'unset'}}>{title}</Typography>
    </Box>
  )
}

export default Header