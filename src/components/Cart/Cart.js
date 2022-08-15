import React from 'react'
import { useTheme } from '@emotion/react';
import { Add, Cancel, Remove } from '@mui/icons-material';
import { Box, Button, Dialog, IconButton, Typography, useMediaQuery } from '@mui/material'
import { cartData } from '../../data/dummy';
import { StyledCart } from './style';

const Cart = ({ cartOpen, setCartOpen, currentMode, currentColor }) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={cartOpen}
      onClose={() => setCartOpen(false)}
      aria-labelledby="responsive-dialog-title"
      PaperProps={!fullScreen && {
        sx: {
          position: 'fixed', top: '0', right: '0',
          width: { md: '20rem', lg: '23rem' }
        },
        height: '100vh',
        margin: '0 '
      }}

    >
      <StyledCart padding='2rem 1rem' bgcolor={currentMode === 'dark' ? '#334155' : 'white'}>

        <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
          <Typography fontWeight='bold' fontSize='25px'>Shopping Cart</Typography>
          <IconButton className='cancel-icon' onClick={() => setCartOpen(false)}>
            <Cancel />
          </IconButton>
        </Box>

        <Box display={'flex'} flexDirection='column' gap='1rem' marginTop={'10px'}>
          {cartData.map((item, i) => (
            <Box key={i} display='flex' gap='1rem' alignItems={'center'} borderBottom='1px solid #9e9e9e' paddingBottom={'1rem'}>
              <Box component={'img'} src={item.image} height='80px' width='80px' borderRadius={'15px'} />
              <Box>
                <Typography fontSize={'25px'} fontWeight='bold'>{item.name}</Typography>
                <Typography fontSize={'20px'} color='#757575' >{item.category}</Typography>
                <Box display='flex' gap='20px' alignItems={'center'}>
                  <Typography fontSize={'20px'}  >{item.price}</Typography>
                  <Box display='flex' gap='10px' alignItems={'center'}>
                  <Add sx={{ color: 'red', fontSize: '27px',border:'1px solid #9e9e9e' }} />
                  <Typography color='green' fontSize={'27px'}>0</Typography>
                  <Remove sx={{ color: 'green', fontSize: '27px',border:'1px solid #9e9e9e' }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
          <Box display='flex' justifyContent={'space-between'}>
            <Typography>Subtotal</Typography>
            <Typography fontWeight={'bold'}>$890</Typography>
          </Box>
        </Box>

        

        <Box display='flex' justifyContent={'center'} marginTop='1rem'>
          <Button className='btn' variant='contained'
            sx={{
              backgroundColor: `${currentColor}`,
              '&:hover': { backgroundColor: `${currentColor}` },
              width: { xs: '100%' }
            }}>
            Check out
          </Button>
        </Box>

      </StyledCart>

    </Dialog>
  )
}

export default Cart