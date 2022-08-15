import React from 'react'
import { Box } from '@mui/material'
import { Header, LineChart } from '../../../components'


const Line = () => {
  return (
    <Box margin={{ xs: '2rem 0.5rem', sm: '2rem 1rem', md: '2rem' }} padding='2rem' backgroundColor='white' borderRadius={'25px'}>
      <Header category='Chart' title='Infaltion Rate' />
 
        <Box width='100%'>
          <LineChart />
  
      </Box>
    </Box>
  )
}

export default Line