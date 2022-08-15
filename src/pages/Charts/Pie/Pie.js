import { Box } from '@mui/material'
import React from 'react'
import { Header, PieChart } from '../../../components'
import {pieChartData} from '../../../data/dummy'

const Pie = () => {
  return (
    <Box margin={{ xs: '2rem 0.5rem', sm: '2rem 1rem', md: '2rem' }} padding='2rem' backgroundColor='white' borderRadius={'25px'}>
    <Header category='Chart' title='Pie' />

      <Box width='100%'>
        
        <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full"/>

    </Box>
  </Box>
  )
}

export default Pie