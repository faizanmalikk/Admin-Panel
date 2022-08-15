import { Box, styled } from "@mui/material";


const StyledBox = styled(Box)(({ theme }) => ({

   padding: '2rem',

   [theme.breakpoints.down('sm')]: {
      padding: '2rem 10px'
   },

   '.banner-container': {
      position: 'relative',
      borderRadius: '10px',
      boxShadow: '0 0 30px rgba(0,0,0,0.1)',

   },
   '.banner-title': {
      position: 'absolute',
      top: '20%',
      left: '5%'
   },
   '.banner-btn': {
      position: 'absolute',
      bottom: '20%',
      left: '5%'
   },
   '.banner-icons': {
      width: '13rem',
      borderRadius: '13px',
      height: '10rem',
      [theme.breakpoints.down('xl')]: {
         width: '9rem',
      },
      [theme.breakpoints.down('lg')]: {
         width: '12rem',
      },
   },

   '.icon-logo': {
      fontSize: '35px',
      padding: '20px',
      transition: 'all 0.4s ease-in-out',
      marginTop: '2rem',
      marginLeft: '1rem',

      '&:hover': {

         boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }
   }

}))



export {

   StyledBox

}
