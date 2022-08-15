import React, { useContext, useEffect, useState } from 'react'
import { ChatBubbleOutlineOutlined, KeyboardArrowDown, Menu, NotificationsNoneOutlined, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material'
import { Avatar, Box, IconButton, Tooltip, Typography, useMediaQuery } from '@mui/material'
import StatesContext from '../../context/StatesContext'
import { NavbarContainer } from './style'
import avatar from '../../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '../index'

const Navbar = () => {

  const context = useContext(StatesContext)
  const { setActiveMenu, activeMenu,  clicked, setThemeMenu, currentColor, currentMode,
    chatOpen, setChatOpen, notificationOpen, setNotificationOpen, profileOpen, setProfileOpen, cartOpen, setCartOpen
  } = context

  const smallerthen900 = useMediaQuery('(max-width:900px)')


  const handleMenu = () => {

    setActiveMenu(!activeMenu)
    setThemeMenu(false)

  }

  useEffect(() => {

    if (smallerthen900) {
      setActiveMenu(false)
    }

  }, [])


  return (
    <NavbarContainer>
      <Box>
        <IconButton onClick={handleMenu} sx={{ color: `${currentColor}` }} className='btn'>
          <Menu />
        </IconButton>
      </Box>

      <Box >
        <Box display={'inline-block'}>
          <Tooltip title='Cart' placement='bottom'>
            <IconButton onClick={() => setCartOpen(true)} sx={{ color: `${currentColor}`, display: { xs: 'none', sm: 'unset' } }} className='btn' position='relative' >
              <ShoppingCartOutlined />
            </IconButton>
          </Tooltip>
          <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} currentMode={currentMode} currentColor={currentColor} />
        </Box>

        <Box display={'inline-block'} sx={{ position: 'relative' }}>
          <Tooltip title='Chat' placement='bottom'>
            <IconButton onClick={() => setChatOpen(true)} sx={{ color: `${currentColor}`, display: { xs: 'none', sm: 'unset' } }} className='btn' >
              <span className='styled-dot'></span>
              <ChatBubbleOutlineOutlined />
            </IconButton>
          </Tooltip>
          <Chat chatOpen={chatOpen} setChatOpen={setChatOpen} currentMode={currentMode} currentColor={currentColor} />
        </Box>

        <Box display={'inline-block'} sx={{ position: 'relative' }}>
          <Tooltip title='Notification' placement='bottom'>
            <IconButton onClick={() => setNotificationOpen(true)} sx={{ color: `${currentColor}`, display: { xs: 'none', sm: 'unset' } }} className='btn' >
              <span className='styled-dot2'></span>
              <NotificationsNoneOutlined />
            </IconButton>
          </Tooltip>
          <Notification notificationOpen={notificationOpen} setNotificationOpen={setNotificationOpen} currentMode={currentMode} currentColor={currentColor} />
        </Box>

        <Box display={'inline-block'} sx={{ position: 'relative' }}>
          <Tooltip title='Profile' placement='bottom'>
            <IconButton onClick={() => setProfileOpen(true)} className='profile-con' >
              <Avatar src={avatar} sx={{ height: '50px', width: '50px' }} />
              <Typography fontSize={'15px'} color='#9e9e9e' padding='0 10px'>Hi, </Typography>
              <Typography fontSize={'15px'} color='#757575' fontWeight={'bold'}>Faizan </Typography>
              <KeyboardArrowDown sx={{ fontSize: '20px', marginLeft: '5px' }} />
            </IconButton>
          </Tooltip>
          <UserProfile profileOpen={profileOpen} setProfileOpen={setProfileOpen} currentMode={currentMode} currentColor={currentColor} />
        </Box>
      </Box>


      {/* {clicked.cart && (<Cart />)} */}


    </NavbarContainer >
  )
}

export default Navbar