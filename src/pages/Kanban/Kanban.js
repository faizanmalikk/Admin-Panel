import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../../components'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../../data/dummy';


const Kanban = () => {
  return (
    <Box margin={{ xs: '2rem 0.5rem', sm: '2rem 1rem', md: '2rem' }} padding={{ xs: '2rem 5px', sm: '2rem 10px', md: '2rem' }} backgroundColor='white' borderRadius={'25px'}>
      <Box display={'flex'} justifyContent={{xs:'center',md:'unset'}}>
        <Header title={'App'} category='Kanban' />
      </Box>
      <KanbanComponent
        id='kaban'
        keyField='Status'
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
      </KanbanComponent>
    </Box>
  )
}

export default Kanban