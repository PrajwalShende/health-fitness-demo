import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/Logo-1-footer.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor='whitesmoke'>
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
      <img src={Logo} alt='logo' width='250px' height='250px' mt='60px'/>
      <Typography variant='h5' pb='40px' mt='10px'>
        Thank You for visiting!!
      </Typography>
      </Stack> 
    </Box>
  )
}

export default Footer