import { Box, styled } from "@mui/material";


const NavbarContainer = styled(Box)(({ theme }) => ({


    padding: '0.5rem 1rem',
    display: 'flex',
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',


    [theme.breakpoints.down('md')]: {
        minWidth: ' 20rem',
        maxWidth: '100vw',

    },
    [theme.breakpoints.down('sm')]: {
        padding: '0.5rem 0.3rem',
        minWidth: '100vw',

    },
    '.btn': {
        padding: '10px',
        transition: 'all 0.4s ease-in-out',
        '&:hover': {
            backgroundColor: 'white',
            boxShadow: '0 0 30px rgba(0,0,0,0.1)'
        }
    },
    '.styled-dot': {
        position: 'absolute',
        top: '10px',
        right: '12px',
        height: '13px',
        width: '13px',
        borderRadius: '50%',
        backgroundColor: '#03C9D7'
    },
    '.styled-dot2': {
        position: 'absolute',
        top: '10px',
        right: '12px',
        height: '13px',
        width: '13px',
        borderRadius: '50%',
        backgroundColor: 'rgb(254, 201, 15)'
    },
    '.profile-con': {
        borderRadius: '10px',

    }

}))



export {

    NavbarContainer

}
