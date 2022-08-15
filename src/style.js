import { Box, styled } from "@mui/material";




const StyledBox = styled(Box)(({ theme }) => ({

    minHeight: '100vh',
    maxHeight: 'auto',
    maxwidth: '100vw',
    display: 'flex',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
        maxwidth: '100vw',

    },
    '.setting-icon': {
        position: 'fixed',
        right: '15px',
        bottom: '15px',
        zIndex: '1'

    },
    '.sidebar-container': {
        position: 'fixed',
        top: '0',
        left: '0',
        bottom: '0',
        height: '100vh',
        width: '13rem',
        zIndex: '1',
        boxShadow: '0 0 30px rgba(0,0,0,0.1)',
        overflow: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '12rem'
        },
        [theme.breakpoints.down('sm')]: {
            width: '10rem'
        },
    },
    '.monthly-con': {
        height: '10rem',
        borderRadius: '15px',
        width: '16rem',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'space-between',
            width: '90%',
        }
    },
    '.trans-con': {
        fontSize: '50px',
        height: '80px',
        width: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        transition: 'all 0.4s ease-in-out',
        '&:hover': {
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            cursor: 'pointer'
        },
        [theme.breakpoints.down('sm')]:{
            height: '50px',
            width: '50px',
            fontSize: '30px',
        }
    },
    '.weekly-con': {
        fontSize: '35px',
        height: '80px',
        width: '80px',
        borderRadius : '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.4s ease-in-out',
        '&:hover': {
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            cursor: 'pointer'
        },
        [theme.breakpoints.down('sm')]:{
            height: '50px',
            width: '50px',
            fontSize: '30px',
        }
    },
    '.medical-btn':{
        textTransform : 'capitalize',
        borderRadius : '15px',
        fontSize : '17px',
        marginTop : '1rem',
        backgroundColor : theme.palette.warning.light,
        '&:hover':{
            backgroundColor : theme.palette.warning.light,
        }
    },
    '.team-btn':{
        textTransform : 'capitalize',
        borderRadius : '15px',
        fontSize : '17px',
        marginTop : '1rem',
    }

}))

const ChartsContainer = styled(Box)(({ theme }) => ({

    borderRadius: '10px',
    width: '100%',
    margin: '0 auto',
    padding: '10px 15px',
    [theme.breakpoints.down('lg')]: {
        width: '80%'
    },
    [theme.breakpoints.down('md')]: {
        width: '90%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '90%'
    },

    '.budget-percen': {

        fontSize: '12px',
        backgroundColor: '#90ee90',
        color: 'black',
        padding: '5px',
        borderRadius: '15px',
        transition: 'all 0.4s ease-in-out',
        '&:hover': {
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            cursor: 'pointer'
        }


    },


}))
export {

    StyledBox,
    ChartsContainer

}
