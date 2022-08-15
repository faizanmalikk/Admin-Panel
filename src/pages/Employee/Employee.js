import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../../components'
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page,Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../../data/dummy';


const Employee = () => {

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <Box margin={{xs:'2rem 0.5rem',sm:'2rem 1rem',md:'2rem'}} padding='2rem' backgroundColor='white' borderRadius={'25px'}>
      <Header category='Page' title='Employees' />

      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        width={'auto'}
        toolbar={['Search']}

        // editSettings={editing}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[ Page, Search , Toolbar]} />
      </GridComponent>
    </Box>
  )
}

export default Employee