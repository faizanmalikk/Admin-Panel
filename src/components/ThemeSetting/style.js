import { Box, styled } from "@mui/material";


const SettingsContainer = styled(Box)(({ theme }) => ({

    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    width: '14rem',
    zIndex: '1',
    [theme.breakpoints.down('sm')]:{
        width : '60%'
    },
    '.cancel-icon': {
        color: 'black',
        '&:hover': {
            backgroundColor: 'white',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
        }
    },
    '.title': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 0',
        borderBottom : '1px solid #9e9e9e'
    }



}))



export {

    SettingsContainer

}
