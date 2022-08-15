import React, { useContext, useEffect } from 'react'
import { SidebarContainer } from './style'
import { SiShopware } from 'react-icons/si'
import { Link, NavLink } from 'react-router-dom'
import { Box, Typography, List, IconButton, useMediaQuery } from '@mui/material'
import { Cancel } from '@mui/icons-material'
import { links } from '../../data/dummy'
import StatesContext from '../../context/StatesContext'



const Sidebar = () => {

  const context = useContext(StatesContext)
  const { setActiveMenu, currentColor, currentMode, setChatOpen , setNotificationOpen,setCartOpen } = context


  const smallerthen900 = useMediaQuery('(max-width:900px)')

  const handleActiveMenu = (name, isActive) => {
    if (smallerthen900) {
      setActiveMenu(false)
    }
    if (name === 'chat') {
      setChatOpen(true)
    }else if(name === 'notification'){
      setNotificationOpen(true)
    }
    else if(name === 'cart'){
      setCartOpen(true)
    }
  }

  const handleActiveClass = (isActive, name) => {


    if (currentMode === 'light') {
      if (name === 'chat') {
        return 'msg-light'
      }
      if (name === 'cart') {
        return 'msg-light'
      }
      if (name === 'notification') {
        return 'msg-light'
      }
    }

    if (currentMode === 'dark') {
      if (name === 'chat') {
        return 'msg-dark'
      }
      if (name === 'cart') {
        return 'msg-dark'
      }
      if (name === 'notification') {
        return 'msg-dark'
      }
    }

    if (isActive) {
      return 'active-link'
    }

    if (!isActive && currentMode === 'light') {
      return 'unactive-link-light'
    } else if (!isActive && currentMode === 'dark') {
      return 'unactive-link-dark'
    }


  }

  useEffect(() => {

    handleActiveClass()


  }, [currentMode])




  return (
    <SidebarContainer>
      <Box display='flex' alignItems='center' justifyContent='space-between' marginBottom={'1rem'}>
        <Link to='/' className='title' style={{ color: currentMode === 'dark' ? 'white' : 'black' }}>
          <SiShopware />
          <Typography>Shoppy</Typography>
        </Link>
        <IconButton onClick={() => setActiveMenu(false)} sx={{ color: 'black' }}>
          <Cancel sx={{ display: { xs: 'block', md: 'none' } }} />
        </IconButton>
      </Box>

      {links.map((item, i) => (
        <Box padding={'5px 0'} key={i}>

          <Typography color='#9e9e9e' fontSize='25px'>{item.title}</Typography>
          <List>
            {item.links.map((item, i) => (

              <NavLink
                to={item.name === 'chat' || item.name === 'cart' || item.name === 'notification' ? '#' : `/${item.name}`}
                key={i}
                className={({ isActive }) => handleActiveClass(isActive, item.name)}
                style={({ isActive }) => ({
                  backgroundColor: isActive && item.name !== 'chat' && item.name !== 'cart' && item.name !== 'notification' ? `${currentColor}` : '',

                })}
                onClick={({ isActive }) => handleActiveMenu(item.name, isActive)}
              >
                {item.icon}
                <Typography fontFamily={'Roboto'} >{item.name}</Typography>

              </NavLink>
            ))}
          </List>
        </Box>

      ))}
    </SidebarContainer>
  )
}

export default Sidebar