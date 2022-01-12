import React from 'react'
import { ThemeProvider } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import theme from './../../Themes/AppTheme';

export const CustomPersonIcon = () => {
    return (
        <ThemeProvider theme={theme}>
            <PersonIcon sx={{ fontSize:'3.125rem' }} color='secondary' />
        </ThemeProvider>
    )
}

