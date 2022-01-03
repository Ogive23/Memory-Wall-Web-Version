import React from 'react'
import { ThemeProvider } from '@mui/material'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import theme from './../../Themes/AppTheme';


export const CustomInfinityIcon = () => {
    return (
        <ThemeProvider theme={theme}>
            <AllInclusiveIcon sx={{ fontSize:'3.125rem' }} color='secondary' />
        </ThemeProvider>
    )
}
