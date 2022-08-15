import React from 'react'
import { useTheme } from '@emotion/react';
import { Cancel } from '@mui/icons-material';
import { Box, Button, Dialog, IconButton, Typography, useMediaQuery } from '@mui/material'
import { StyledChat } from './style';
import { chatData } from '../../data/dummy';

const Chat = ({ chatOpen, setChatOpen , currentMode , currentColor}) => {


  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))


  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        aria-labelledby="responsive-dialog-title"
        PaperProps={!fullScreen && { sx: { position: 'absolute', top: '3rem', right: '2rem', width: { md: '20rem', lg: '23rem' } } }}

      >
        <StyledChat padding='2rem 1rem' bgcolor={currentMode === 'dark' ? '#334155' : 'white'}>

          <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
            <Box display='flex' gap='15px' alignItems={'center'}>
              <Typography fontWeight='bold' fontSize='25px'>Messaages</Typography>
              <Typography fontSize='18px'>5 New</Typography>
            </Box>
            <IconButton className='cancel-icon' onClick={() => setChatOpen(false)}>
              <Cancel />
            </IconButton>
          </Box>

          <Box display={'flex'} flexDirection='column' gap='1rem' marginTop={'10px'}>
            {chatData.map((item, i) => (
              <Box key={i} display='flex' gap='10px'>
                <Box component={'img'} src={item.image} height='80px' width='80px' borderRadius={'50%'} />
                <Box>
                  <Typography fontSize={'25px'} fontWeight='bold'>{item.message}</Typography>
                  <Typography fontSize={'20px'} color='#757575' >{item.desc}</Typography>
                  <Typography fontSize={'20px'} color='#757575' lineHeight={'25px'}>{item.time}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box display='flex' justifyContent={'center'} marginTop='1rem'>
            <Button className='btn' variant='contained'
             sx={{ backgroundColor: `${currentColor}`,
             '&:hover':{ backgroundColor: `${currentColor}`},
             width : {xs:'100%'}
             }}>
              See All Messages
              </Button>
          </Box>

        </StyledChat>

      </Dialog>
    </>
  )
}

export default Chat