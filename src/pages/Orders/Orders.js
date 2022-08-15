import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../../components'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../../data/dummy';


const Orders = () => {

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <Box margin={{xs:'2rem 0.5rem',sm:'2rem 1rem',md:'2rem'}} padding='2rem' backgroundColor='white' borderRadius={'25px'}>
      <Header category='Page' title='Orders' />

      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        // allowExcelExport
        // allowPdfExport
        // contextMenuItems={contextMenuItems}
        // editSettings={editing}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </Box>
  )
}

export default Orders