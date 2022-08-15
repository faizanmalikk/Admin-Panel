import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../../components'
import { GridComponent, ColumnsDirective, ColumnDirective, Search, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../../data/dummy';


const Customer = () => {

  const editing = { allowDeleting: true, allowEditing: true };
  const selectionsettings = { persistSelection: true };

  return (
    <Box margin={{ xs: '2rem 0.5rem', sm: '2rem 1rem', md: '2rem' }} padding='2rem' backgroundColor='white' borderRadius={'25px'}>
      <Header category='Page' title='Customers' />

      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        width={'auto'}
        toolbar={['Search', 'Delete']}
        editSettings={editing}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, Sort, Edit, Filter, Selection]} />
      </GridComponent>
    </Box>
  )
}

export default Customer