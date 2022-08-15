import { Box, styled } from "@mui/material";


const SidebarContainer = styled(Box)(({ theme }) => ({
padding : '1rem 0.5rem',

'.title':{
    textDecoration : 'none',
    display : 'flex',
    alignItems : 'center',
    gap : '15px',
    fontSize : '30px',
    '.MuiTypography-root':{
        fontWeight : 'bold',
        fontSize : '30px'
    }
},
'.active-link':{

    textDecoration : 'none',
    textTransform  :'capitalize',
    display : 'flex',
    alignItems : 'center',
    fontSize : '25px',
    gap : '20px',
    margin : '10px 0',
    padding : '10px',
    borderRadius : '10px',
    color : 'white'
},
'.unactive-link-dark':{
    textDecoration : 'none',
    textTransform  :'capitalize',
    display : 'flex',
    alignItems : 'center',
    fontSize : '25px',
    color : 'white ',
    gap : '20px',
    padding : '10px',
    borderRadius : '10px',
    margin : '10px 0',
    '&:hover':{
        backgroundColor : theme.palette.grey[200],
        cursor : 'pointer',
        color : 'black'
    }
   
},
'.unactive-link-light':{
    textDecoration : 'none',
    textTransform  :'capitalize',
    display : 'flex',
    alignItems : 'center',
    fontSize : '25px',
    gap : '20px',
    color : 'black',
    padding : '10px',
    borderRadius : '10px',
    margin : '10px 0',
    '&:hover':{
        backgroundColor : theme.palette.grey[200],
        cursor : 'pointer'
    }
   
},

'.msg-dark':{
    textDecoration : 'none',
    textTransform  :'capitalize',
    display : 'flex',
    alignItems : 'center',
    fontSize : '25px',
    color : 'white ',
    gap : '20px',
    padding : '10px',
    borderRadius : '10px',
    margin : '10px 0',
    '&:hover':{
        backgroundColor : theme.palette.grey[200],
        cursor : 'pointer',
        color : 'black'
    }
},
'.msg-light':{
    textDecoration : 'none',
    textTransform  :'capitalize',
    display : 'flex',
    alignItems : 'center',
    fontSize : '25px',
    color : 'black ',
    gap : '20px',
    padding : '10px',
    borderRadius : '10px',
    margin : '10px 0',
    '&:hover':{
        backgroundColor : theme.palette.grey[200],
        cursor : 'pointer',

    }
}

}))



export {

    SidebarContainer
    
}
