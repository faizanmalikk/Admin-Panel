import { Box, Button, styled } from "@mui/material";


const GridOrderImage = styled('img')(({ theme }) => ({

    height: '100px',
    width: '100px',
    borderRadius: '50%'

}))


const GridOrderStatus = styled(Button)(({ theme }) => ({

    color: 'white',
    textTransform: 'capitalize',
    borderRadius: '14px',
    fontSize: '10px'
}))


const GridEmployeeProfile = styled(Box)(({ theme }) => ({

    display: 'flex',
    alignItems: 'center',
    gap: '10px',

    '.employee-img': {
        width: '50px',
        height: '50px',
        borderRadius: '50%'
    }

}))

const CustomerGridImage = styled(Box)(({ theme }) => ({

    display: 'flex',
    gap: '10px',
    alignItems : 'center',
    '.customer-img': {
        width: '50px',
        height: '50px',
        borderRadius: '50%'
    }

}))

const CustomerGridStatus = styled(Box)(({ theme }) => ({

    display : 'flex',
    gap : '8px',
    alignItems : 'center',
    justifyContent : 'center',
    textTransform : 'capitalize',
    color : theme.palette.grey[700],
    '.dot':{
        height : '14px',
        width : '14px',
        borderRadius : '50%'
    }
  
}))
export {

    GridOrderImage,
    GridOrderStatus,
    GridEmployeeProfile,
    CustomerGridImage,
    CustomerGridStatus

}
