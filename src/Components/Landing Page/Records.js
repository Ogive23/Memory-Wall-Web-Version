import { Box, Grid } from '@mui/material'
import React, { useRef } from 'react'
import { CustomCountUp } from './CustomCountUp';
import { CustomInfinityIcon } from './CustomInfinityIcon';
import { CustomPersonIcon } from './CustomPersonIcon';

export const Records = () => {
    const countUpRef = useRef(null);
    console.log(932 % 10);
    return (
        <Box sx={{
            height: '40vh',
            background: 'url(https://cutewallpaper.org/21/html-gif-background/12-Cool-CSS-Animated-Background-Webnet.gif)',
            mx: '10%',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            boxShadow: 3,
            my: '1%'
        }}>
            <Grid container sx={{
                height: 'inherit', backgroundColor: 'rgba(0,0,0,0.3)',
                borderRadius: '10px',
                boxShadow: 3
            }} >
                <CustomCountUp size={6} end={100} suffix="Active Users" icon={<CustomPersonIcon />} />
                <CustomCountUp size={6} end={1000} suffix="Memory Lived" icon={<CustomInfinityIcon />} />
            </Grid>
        </Box>
    )
}
