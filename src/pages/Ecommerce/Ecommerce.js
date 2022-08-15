import React, { useContext, useState } from 'react'
import { StyledBox } from './style'
import banner from '../../data/welcome-bg.svg'
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, Typography, useMediaQuery } from '@mui/material'
import MyButton from '../../components/Button/Button'
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../../data/dummy';
import { ChartsContainer } from '../../style'
import { Circle, MoreHoriz } from '@mui/icons-material'
import { LineChart, Pie, SparkLine, Stacked } from '../../components'
import StatesContext from '../../context/StatesContext'
import img from '../../data/product8.jpg'


const Ecommerce = () => {

  const context = useContext(StatesContext)
  const { currentColor, currentMode } = context

  const [transYear, setTransYear] = useState('')

  const smallerthen360 = useMediaQuery('(max-width:360px)')

  return (
    <StyledBox>
      <Box display={{ lg: 'flex' }} gap={{ lg: '10px' }} marginBottom='2rem'>
        <Box className='banner-container' height={{ xs: '250px', sm: '300px', md: '400px' }} flex={{ lg: '0.7', xl: '1' }} bgcolor={currentMode === 'dark' ? '#334155' : 'white'}>
          <Box component={'img'} src={banner} width='100%' height={'100%'} />
          <Box className='banner-title'>
            <Typography color='#9e9e9e' fontWeight={'bold'} fontSize='20px'>Earnings</Typography>
            <Typography fontSize={'25px'}>$689,38998</Typography>
          </Box>
          <Box className='banner-btn'>
            <MyButton
              color='white'
              bgColor={`${currentColor}`}
              text='Download'
              size='large'

            />
          </Box>
        </Box>

        <Box flex={{ lg: '1' }} display='flex' flexWrap='wrap' gap='10px' justifyContent={{ xs: 'center', lg: 'flex-end' }} marginTop={{ xs: '2rem', lg: '0' }}>
          {earningData.map((item, i) => (
            <Box className='banner-icons' key={i} bgcolor={currentMode === 'dark' ? '#334155' : 'white'}>
              <IconButton
                disableRipple
                sx={{ color: `${item.iconColor}`, backgroundColor: `${item.iconBg}` }}
                className='icon-logo'
              >

                {item.icon}
              </IconButton>

              <Box display={'flex'} marginLeft='1rem' marginTop={'10px'} gap='10px'>
                <Typography fontSize={'30px'} color={currentMode === 'dark' ? 'white' : 'black'}>{item.amount}</Typography>
                <Typography fontSize={'20px'} color={item.pcColor}>{item.percentage}</Typography>
              </Box>
              <Typography marginLeft={'1rem'} fontSize='25px' color='#757575'>{item.title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box display={{ lg: 'flex' }} gap='10px'>
        <ChartsContainer bgcolor={currentMode === 'dark' ? '#334155' : 'white'} flex={{ lg: '1' }}>
          <Box display='flex' flexDirection={{ xs: 'column', sm: 'row' }} justifyContent={{ md: 'space-between' }} alignItems='center'>
            <Typography fontSize={'30px'} >Revenue Updates</Typography>

            <Box display='flex' gap='20px'>
              <Box display={'flex'} gap='10px' alignItems={'center'}>
                <Circle sx={{ fontSize: '15px', color: '#757575' }} />
                <Typography fontSize={'20px'} color='#757575'>Expense</Typography>
              </Box>
              <Box display={'flex'} gap='10px' alignItems={'center'}>
                <Circle sx={{ fontSize: '15px', color: 'green' }} />
                <Typography fontSize={'20px'} color='green'>Budget</Typography>
              </Box>
            </Box>

          </Box>
          <Box display='flex' >
            <Box display='flex' flexDirection={{ xs: 'column', md: 'row' }} width='100%'>
              <Box flex={{ md: '1' }} >
                <Box borderRight={{ md: '1px solid #e0e0e0' }} width='100%' display='flex' flexDirection={'column'} alignItems='center' >
                  <Box>
                    <Box marginTop={{ xs: '2rem', md: '1rem' }} >
                      <Box display='flex' gap='10px' alignItems={'center'}>
                        <Typography fontSize={'35px'} fontWeight='bold' fontFamily={'Roboto'}>$93,789</Typography>
                        <Typography className='budget-percen'>23%</Typography>
                      </Box>
                      <Typography fontSize={'18px'} color='#757575'>Budget</Typography>
                    </Box>

                    <Box marginTop={'1rem'} >
                      <Typography fontSize={'35px'} fontWeight='bold' fontFamily={'Roboto'}>$49,272</Typography>
                      <Typography fontSize={'18px'} color='#757575'>Expense</Typography>
                    </Box>
                  </Box>
                  <Box margin='1rem 0'>
                    <SparkLine
                      currentColor={`${currentColor}`}
                      id='line-sparkline'
                      type='Line'
                      height='80px'
                      width='250px'
                      data={SparklineAreaData}
                      color={`${currentColor}`}
                    />
                  </Box>

                  <Box margin={'1rem 0'}>
                    <MyButton
                      color='white'
                      bgColor={`${currentColor}`}
                      text='Download Report'
                      size='large'

                    />
                  </Box>
                </Box>
              </Box>

              <Box flex={{ md: '1' }}>
                <Box display='flex' justifyContent='center' marginTop={{ xs: '1rem', md: '2.5rem' }} >
                  <Stacked width={smallerthen360 ? '250px' : '320px'} height='360px' currentMode={currentMode} />
                </Box>
              </Box>
            </Box>
          </Box>
        </ChartsContainer>
        <Box flex={{ lg: '0.6' }} display='flex' gap='10px' flexDirection={'column'} alignItems={'center'} marginTop={{ xs: '2rem', lg: '0' }}>
          <Box sx={{ backgroundColor: currentColor }} borderRadius='15px' padding='15px' width={{ xs: '90%', sm: '15rem' }} minHeight='10rem'>
            <Box display={'flex'} gap='10px' paddingTop={'2rem'} flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'center', sm: 'unset' }}>
              <Typography color={'white'} fontWeight='bold' fontSize='35px'>Earnings</Typography>
              <Box paddingTop={'5px'}>
                <Typography color='white' fontWeight='bold' fontSize='34px'>$879,9809,44</Typography>
                <Typography color='#757575' fontSize='25px' marginBottom={{ xs: '1rem', sm: '0' }}>Monthly Revenue</Typography>
              </Box>
            </Box>
            <Box display='flex' justifyContent={'center'} >
              <SparkLine currentColor={currentColor} id="column-sparkLine" height={smallerthen360 ? '50px' : '100px'} type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </Box>
          </Box>

          <Box className='monthly-con' bgcolor={currentMode === 'dark' ? '#334155' : 'white'}>
            <Box marginLeft='-15px'>
              <Typography fontSize={'30px'} fontWeight='bold'>$456,878</Typography>
              <Typography fontSize={'23px'} color='#757575'>Yearly Sales</Typography>
            </Box>
            <Box width={{ xs: '5rem', sm: '8rem' }} marginLeft={{ sm: '5rem' }} >
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box display='flex' gap='1rem' flexWrap={'wrap'} justifyContent='center' marginTop={'1.5rem'}>
        <Box bgcolor={currentMode === 'dark' ? '#334155' : 'white'} padding={{ xs: '1.5rem 0.5rem', sm: '1.5rem' }} borderRadius={'15px'} width={{ xs: '90%', sm: '80%', md: '20rem' }}>
          <Box display='flex' justifyContent={'space-between'} gap='10px' alignItems='center'>
            <Typography fontSize={{ xs: '25px', sm: '30px' }}>Recent Transactions</Typography>
            <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Date</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={transYear}
                onChange={(e) => setTransYear(e.target.value)}
                label="Date"
                size='small'
              >
                {dropdownData.map((item, i) => (
                  <MenuItem key={i} value={item.Time}>{item.Time}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box display='flex' flexDirection={'column'} gap={{ xs: '0.5rem', sm: '1rem' }} padding='2rem 0' borderBottom={'1px solid #9e9e9e'}>
            {recentTransactions.map((item, i) => (
              <Box display={'flex'} justifyContent='space-between' alignItems={'center'} key={i} >
                <Box display={'flex'} gap='1rem' alignItems={'center'}>
                  <Box
                    className='trans-con'
                    sx={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography fontSize={{ xs: '20px', sm: '25px' }} fontWeight='bold'>{item.title}</Typography>
                    <Typography fontSize={{ xs: '15px', sm: '20px' }} color='#757575'>{item.desc}</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography color={item.pcColor} >{item.amount}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box display='flex' justifyContent={'space-between'} alignItems='center' marginTop='1.5rem'>
            <Button variant='contained' sx={{ backgroundColor: `${currentColor}`, '&:hover': { backgroundColor: `${currentColor}` } }}>
              Add
            </Button>
            <Typography fontSize={{ xs: '15px', sm: '20px' }} color='#757575'>36 Recent Transactions</Typography>
          </Box>
        </Box>
        <Box>
        </Box>
        <Box bgcolor={currentMode === 'dark' ? '#334155' : 'white'} padding='1.5rem' borderRadius={'15px'} width={{ xs: '90%', sm: '80%', md: '27rem' }}>
          <Box display='flex' justifyContent={'space-between'} alignItems='center'>
            <Typography fontSize={'30px'}>Sales Overview</Typography>
            <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Date</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={transYear}
                onChange={(e) => setTransYear(e.target.value)}
                label="Date"
                size='small'
              >
                {dropdownData.map((item, i) => (
                  <MenuItem key={i} value={item.Time}>{item.Time}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box marginTop={'3rem'}>
            <LineChart />
          </Box>
        </Box>
      </Box>

      <Box display={'flex'} gap='1rem' flexWrap={'wrap'} justifyContent='center' marginTop={'1.5rem'}>
        <Box bgcolor={currentMode === 'dark' ? '#334155' : 'white'} padding={{ xs: '1.5rem 0.5rem', sm: '1.5rem' }} borderRadius={'15px'} width={{ xs: '90%', sm: '80%', md: '17rem' }}>
          <Box display='flex' justifyContent={'space-between'} alignItems='center'>
            <Typography fontSize={'30px'}>Weekly Stats</Typography>
            <MoreHoriz />
          </Box>
          <Box display='flex' flexDirection={'column'} gap={{ xs: '0.5rem', sm: '1rem' }} padding='2rem 0'>
            {weeklyStats.map((item, i) => (
              <Box display={'flex'} justifyContent='space-between' alignItems={'center'} key={i} >
                <Box display={'flex'} gap='1rem' alignItems={'center'}>
                  <Box
                    className='weekly-con'
                    sx={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography fontSize={{ xs: '20px', sm: '25px' }} fontWeight='bold'>{item.title}</Typography>
                    <Typography fontSize={{ xs: '15px', sm: '20px' }} color='#757575'>{item.desc}</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography color={item.pcColor} >{item.amount}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box display='flex' justifyContent={'center'}>
            <SparkLine currentColor={currentColor} id="area-sparkLine" height='160px' type="Area" data={SparklineAreaData} width={smallerthen360 ? '280' : '320'} color="rgb(242, 252, 253)" />
          </Box>
        </Box>
        <Box bgcolor={currentMode === 'dark' ? '#334155' : 'white'} padding={{ xs: '1.5rem 0.5rem', sm: '1.5rem' }} borderRadius={'15px'} width={{ xs: '90%', sm: '80%', md: '16rem' }}>
          <Box display='flex' justifyContent={'space-between'} alignItems='center'>
            <Typography fontSize={'30px'}>MedicalPro Branding</Typography>
            <MoreHoriz />
          </Box>
          <Button variant='contained' className='medical-btn'>
            1 Aug, 2022
          </Button>
          <Box display='flex' marginTop={'1rem'} justifyContent='center'>
            {medicalproBranding.data.map((item, i) => (
              <Box key={i} borderRight='1px solid #9e9e9e' borderBottom='1px solid #9e9e9e' padding='10px'>
                <Typography textAlign={'center'} color='#757575' >{item.title}</Typography>
                <Typography textAlign={'center'} fontWeight='bold'>{item.desc}</Typography>
              </Box>
            ))}
          </Box>
          <Box>
            <Typography fontSize={'30px'} marginTop='1rem'>Teams</Typography>
            <Box display='flex' gap='1rem' >
              {medicalproBranding.teams.map((item, i) => (
                <Button key={i} variant='contained'
                  className='team-btn'
                  sx={{
                    backgroundColor: item.color,
                    '&:hover': { backgroundColor: item.color }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Box>
          <Box padding='1rem 0' margin='1rem 0' borderTop={'1px solid #9e9e9e'} borderBottom={'1px solid #9e9e9e'}>
            <Typography fontSize={'25px'}>Leaders</Typography>
            <Box display={'flex'} justifyContent='space-between' flexWrap={'wrap'}>
              {medicalproBranding.leaders.map((item, i) => (
                <Box component='img' src={item.image} key={i} height={{ xs: '60px', sm: '60px' }} width={{ xs: '60px', sm: '60px' }} borderRadius={'50%'} sx={{ marginTop: '10px' }} />
              ))}
            </Box>
          </Box>
          <Box display='flex' justifyContent={'space-between'} alignItems='center' marginTop='1.5rem'>
            <Button variant='contained' sx={{ backgroundColor: `${currentColor}`, '&:hover': { backgroundColor: `${currentColor}` } }}>
              Add
            </Button>
            <Typography fontSize={{ xs: '15px', sm: '20px' }} color='#757575'>8 Recent Transactions</Typography>
          </Box>
        </Box>

        <Box bgcolor={currentMode === 'dark' ? '#334155' : 'white'} padding={{ xs: '1.5rem 0.5rem', sm: '1.5rem' }} borderRadius={'15px'} width={{ xs: '90%', sm: '80%', md: '15rem' }}>
          <Box display='flex' justifyContent={'space-between'} alignItems='center'>
            <Typography fontSize={'30px'}>Daily Activities</Typography>
            <MoreHoriz />
          </Box>
          <Box margin='1rem 0'>
            <Box component={'img'} src={img} height='200px' width='100%' />
          </Box>
          <Box>
            <Typography fontSize={'25px'} fontWeight='bold'>React 18 coming soon!</Typography>
            <Typography fontSize={'20px'} color='#757575'>By Johnathan Doe</Typography>
            <Typography fontSize={'22px'} color='#757575' textAlign={'justify'} margin='1rem 0'>
              This will be the small description for the news you have shown here. There could be some great info
            </Typography>
            <Button variant='contained' sx={{ backgroundColor: `${currentColor}`, '&:hover': { backgroundColor: `${currentColor}` } }}>
              Read More
            </Button>
          </Box>

        </Box>
      </Box>

    </StyledBox>
  )
}

export default Ecommerce