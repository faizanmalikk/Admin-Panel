import { Box } from '@mui/material'
import React from 'react'
import { BarChat, Header } from '../../../components'

const Bar = () => {
  return (
    <Box margin={{ xs: '2rem 0.5rem', sm: '2rem 1rem', md: '2rem' }} padding='2rem' backgroundColor='white' borderRadius={'25px'}>
    <Header category='Chart' title='Olympic Medal Counts - RIO' />

      <Box width='100%'>
        
        <BarChat />

    </Box>
  </Box>
  )
}

export default Bar