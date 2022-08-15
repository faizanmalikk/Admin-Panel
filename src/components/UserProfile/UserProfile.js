import React from 'react'
import { useTheme } from '@emotion/react';
import { Cancel } from '@mui/icons-material';
import { Box, Button, Dialog, IconButton, Typography, useMediaQuery } from '@mui/material'
import { userProfileData } from '../../data/dummy';
import { StyledProfile } from './style';
import img from '../../data/avatar.jpg'


const UserProfile = ({ profileOpen, setProfileOpen, currentMode, currentColor }) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (

    <Dialog
      fullScreen={fullScreen}
      open={profileOpen}
      onClose={() => setProfileOpen(false)}
      aria-labelledby="responsive-dialog-title"
      PaperProps={!fullScreen && {
        sx: {
          position: 'absolute', top: '3rem', right: '0',
          width: { md: '20rem', lg: '23rem' }
        },

      }}

    >
      <StyledProfile padding='2rem 1rem' bgcolor={currentMode === 'dark' ? '#334155' : 'white'}>

        <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
          <Typography fontWeight='bold' fontSize='30px'>User Profile</Typography>
          <IconButton className='cancel-icon' onClick={() => setProfileOpen(false)}>
            <Cancel />
          </IconButton>
        </Box>

        <Box marginTop={'1rem'} display='flex' gap='1rem' alignItems={'center'}>
          <Box component='img' src={img} width='120px' height='120px' borderRadius='50%'/>
       <Box>
        <Typography fontSize='30px' fontWeight={'bold'}>Faizan Jamil</Typography>
        <Typography fontSize='20px'  color='#757575'>Administrator</Typography>
        <Typography fontSize='17px'  color='#757575' fontWeight={'bold'}>faizanjamil656@gmail.com</Typography>
       </Box>
        </Box>

        <Box display={'flex'} flexDirection='column' gap='1rem' margin='2rem 0'>
          {userProfileData.map((item, i) => (
            <Box key={i} display='flex' gap='1rem'>
              <IconButton disableRipple
               sx={{ backgroundColor: `${item.iconBg}`,
               color: `${item.iconColor}`,
               height : '80px',
               width : '80px',
               borderRadius : '50%'
               }}>
                {item.icon}
              </IconButton>
              <Box>
                <Typography fontSize={'25px'} fontWeight='bold'>{item.title}</Typography>
                <Typography fontSize={'20px'} color='#757575' >{item.desc}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box display='flex' justifyContent={'center'} marginTop='1rem'>
          <Button className='btn' variant='contained'
            sx={{
              backgroundColor: `${currentColor}`,
              '&:hover': { backgroundColor: `${currentColor}` },
              width: { md: '100%' }
            }}>
          Logout
          </Button>
        </Box>

      </StyledProfile>

    </Dialog>
  )
}

export default UserProfile