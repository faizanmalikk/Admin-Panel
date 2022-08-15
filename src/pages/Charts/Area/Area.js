import { Box } from '@mui/material'
import React from 'react'
import { AreaChart, Header } from '../../../components'

const Area = () => {
  return (
    <Box margin={{ xs: '2rem 0.5rem', sm: '2rem 1rem', md: '2rem' }} padding='2rem' backgroundColor='white' borderRadius={'25px'}>
    <Header category='Chart' title='Infaltion Rate In Percentage' />

      <Box width='100%'>
        
        <AreaChart />

    </Box>
  </Box>
  )
}

export default Area