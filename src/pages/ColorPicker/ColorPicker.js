import { Box, Typography } from '@mui/material'
import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

const ColorPicker = () => {

  const change = (args) => {
    document.getElementById('myPreview').style.backgroundColor = args.currentValue.hex
  }
  return (
    <Box margin={{ xs: '2rem 0.5rem', sm: '2rem 1rem', md: '2rem' }} padding={{ xs: '2rem 15px', sm: '2rem 1rem', md: '2rem' }} backgroundColor='white' borderRadius={'25px'}>

      <Box marginBottom={'1rem'}>
        <Typography fontSize='26px' color='#9e9e9e' textAlign={{xs:'center',sm:'unset'}}>App</Typography>
        <Typography fontSize='35px' color='black' fontWeight={'bold'} textAlign={{xs:'center',sm:'unset'}}>Color Picker</Typography>
      </Box>


      <Box width='100%' display={'flex'} justifyContent='center'>
        <Box id='myPreview' height='1rem' width={'6rem'} borderRadius='15px' backgroundColor='black'>
        </Box>
      </Box>

      <Box display='flex' justifyContent={'center'} alignItems='center' gap={{xs:'1rem',md:'3rem'}} flexWrap={'wrap'}>
        <Box>
          <Typography textAlign={'center'} margin='10px 0' fontSize={'22px'} >Inline Palette</Typography>
          <ColorPickerComponent
            id="inline-palette"
            mode="Palette"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
          />
        </Box>

        <Box>
          <Typography textAlign={'center'} margin='10px 0' fontSize={'22px'} >Inline Picker</Typography>
          <ColorPickerComponent
            id="inline-palette"
            mode="Picker"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
          />
        </Box>
      </Box>


    </Box>
  )
}

export default ColorPicker