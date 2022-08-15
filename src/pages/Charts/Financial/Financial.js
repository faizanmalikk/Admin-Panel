import { Box } from '@mui/material'
import React from 'react'
import { FinancialChart, Header } from '../../../components'

const Financial = () => {
  return (
    <Box margin={{ xs: '2rem 0.5rem', sm: '2rem 1rem', md: '2rem' }} padding='2rem' backgroundColor='white' borderRadius={'25px'}>
    <Header category='Chart' title='Financial' />

      <Box width='100%'>
        
        <FinancialChart />

    </Box>
  </Box>
  )
}

export default Financial