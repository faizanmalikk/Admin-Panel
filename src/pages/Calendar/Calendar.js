import React from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { Box } from '@mui/material';
import { Header } from '../../components'
import { scheduleData } from '../../data/dummy';


const Calendar = () => {
  return (
    <Box margin={{ xs: '2rem 0.5rem', sm: '2rem 1rem', md: '2rem' }} padding={{ xs: '2rem 5px', sm: '2rem 10px', md: '2rem' }} backgroundColor='white' borderRadius={'25px'}>
      <Box display={'flex'} justifyContent={{ xs: 'center', sm: 'unset' }}>
        <Header title={'App'} category='Calendar' />
      </Box>
      <ScheduleComponent
        height={'650px'}
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2022, 0, 14)}
        showQuickInfo={false}
      >


        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </Box>
  )
}

export default Calendar