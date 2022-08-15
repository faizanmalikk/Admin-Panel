import React, { useContext, useEffect } from 'react'
import { Box, IconButton, Tooltip, ThemeProvider, createTheme, Backdrop } from '@mui/material'
import { Settings } from '@mui/icons-material'
import { StyledBox } from './style';
import { Route, Routes } from 'react-router-dom';
import { Area, Bar, Calendar, ColorMapping, ColorPicker, Customer, Ecommerce, Editor, Employee, Financial, Kanban, Line, Orders, Pie, Pyramid } from './pages';
import { Navbar, Sidebar, ThemeSetting } from './components'
import WebFont from 'webfontloader'
import StatesContext from './context/StatesContext';
import { Scrollbars } from 'react-custom-scrollbars-2';


const App = () => {

  const context = useContext(StatesContext)
  const { activeMenu, themeMenu, setThemeMenu, setActiveMenu , currentMode , currentColor} = context

  const darkTheme = createTheme({
    palette: {
      mode: currentMode
    }
  })

  const handleSettings = () => {

    setActiveMenu(false)
    setThemeMenu(true)

  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto']
      }
    })


  }, [])


  return (
    <ThemeProvider theme={darkTheme}>
      <StyledBox bgcolor={currentMode === 'dark' ? 'rgb(17 24 39)' : '#f2f7fb'} color={'text.primary'} overflow={activeMenu ? 'auto' : 'hidden'} >


        <Tooltip title='Settings' placement="top" >
          <IconButton
            sx={{ backgroundColor: `${currentColor}`, color: 'white', '&:hover': { backgroundColor: `${currentColor}` } }}
            className='setting-icon'
            onClick={handleSettings}
          >
            <Settings />
          </IconButton>
        </Tooltip>

        {activeMenu && (
          <Box className='sidebar-container' bgcolor={currentMode === 'dark' ? '#1e293b' : 'white'}>

            <Scrollbars
              style={{
                minHeight: '100vh', width: '100%'
              }}
              >
              <Sidebar />
            </Scrollbars>
          </Box>
        )}

        <Box>
          

          {themeMenu && (
            <>
            <Backdrop open={themeMenu} onClick={() => setThemeMenu(false)} sx={{ zIndex: '9',marginRight:{xs:'60%',sm:'14rem'} }} />
              <ThemeSetting />
            </>
          )}

        </Box>

        <Box marginLeft={activeMenu && { xs: '10rem', sm: '12rem', md: '13rem' }} width='100%'>

          <Navbar />
          <Box>


            <Routes>



              {/* Dashboard */}
              <Route exact path='/' element={<Ecommerce />} />
              <Route exact path='/ecommerce' element={<Ecommerce />} />

              {/* Pages */}
              <Route exact path='/orders' element={<Orders />} />
              <Route exact path='/employees' element={<Employee />} />
              <Route exact path='/customers' element={<Customer />} />

              {/* Apps */}
              <Route exact path='/kanban' element={<Kanban />} />
              <Route exact path='/editor' element={<Editor />} />
              <Route exact path='/calendar' element={<Calendar />} />
              <Route exact path='/color-picker' element={<ColorPicker />} />

              {/* Charts */}
              <Route exact path='/line' element={<Line />} />
              <Route exact path='/area' element={<Area />} />
              <Route exact path='/bar' element={<Bar />} />
              <Route exact path='/pie' element={<Pie />} />
              <Route exact path='/financial' element={<Financial />} />
              <Route exact path='/color-mapping' element={<ColorMapping />} />
              <Route exact path='/pyramid' element={<Pyramid />} />


            </Routes>
          </Box>
        </Box>
      </StyledBox>
    </ThemeProvider>
  )
}

export default App