import { Cancel, Done, OneKk } from '@mui/icons-material'
import { Box, Typography, IconButton, RadioGroup, FormControlLabel, Radio, Tooltip } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import StatesContext from '../../context/StatesContext'
import { SettingsContainer } from './style'
import { themeColors } from '../../data/dummy'

const ThemeSetting = () => {

  const context = useContext(StatesContext)
  const { setThemeMenu, currentColor ,currentMode, setTheme , setMode } = context


  return (

    <>
      <SettingsContainer bgcolor={currentMode === 'dark' ? '#334155' : 'white'}>
        <Box padding='0 13px'>

          <Box className='title'>
            <Typography fontSize={'23px'} fontWeight='bold'>Settings</Typography>
            <IconButton className='cancel-icon' onClick={() => setThemeMenu(false)}>
              <Cancel />
            </IconButton>
          </Box>

          <Box padding='0.5rem 0' borderBottom='1px solid #9e9e9e'>
            <Typography>Theme Options</Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={currentMode}
              name="radio-buttons-group"
              onChange={(e) => setMode(e)}
            >
              <FormControlLabel value="light" control={<Radio size='small' />} label="Light" />
              <FormControlLabel value="dark" control={<Radio size='small' />} label="Dark" />
            </RadioGroup>
          </Box>

          <Box padding='0.5rem 0'>
            <Typography>Theme Colors</Typography>
            <Box display='flex' gap='10px' flexWrap='wrap' marginTop={'0.5rem'}>
              {themeColors.map((item, i) => (
                <Tooltip key={i} title={item.name} placement={'top'}>
                  <Box
                    backgroundColor={item.color}
                    height='40px'
                    width='40px'
                    borderRadius='50%'
                    display='flex'
                    justifyContent={'center'}
                    alignItems='center'
                    onClick={()=> setTheme(item.color)}
                    sx={{cursor : 'pointer'}}
                  >
                    {currentColor === item.color && (

                      <Done sx={{ color: 'white', fontSize: '25px' }} />
                    )}
                  </Box>
                </Tooltip>
              ))}
            </Box>
          </Box>

        </Box>

      </SettingsContainer>
    </>
  )
}

export default ThemeSetting