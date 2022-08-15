import { Box, styled } from "@mui/material";


const StyledNotification = styled(Box)(({ theme }) => ({

    '.cancel-icon': {
        color: 'black',
        '&:hover': {
            backgroundColor: 'white',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
        }
    },
    '.btn':{
        color : 'white',
        borderRadius : '10px'
    }
}))



export {

    StyledNotification

}