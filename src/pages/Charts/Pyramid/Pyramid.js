import { Box } from '@mui/material'
import React from 'react'
import { Header, PyramidChart } from '../../../components'

const Pyramid = () => {
  return (
    <Box margin={{ xs: '2rem 0.5rem', sm: '2rem 1rem', md: '2rem' }} padding='2rem' backgroundColor='white' borderRadius={'25px'}>
    <Header category='Chart' title='Pyramid' />

      <Box width='100%'>
        
        <PyramidChart />

    </Box>
  </Box>
  )
}

export default Pyramid