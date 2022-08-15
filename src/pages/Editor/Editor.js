import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../../components'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';


const Editor = () => {
  return (
    <Box margin={{ xs: '2rem 0.5rem', sm: '2rem 1rem', md: '2rem' }} padding={{ xs: '2rem 15px', sm: '2rem 1rem', md: '2rem' }} backgroundColor='white' borderRadius={'25px'}>
      <Box>
        <Header title={'App'} category='Editor' />
      </Box>
      <RichTextEditorComponent

      >
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>

    </Box>
  )
}

export default Editor