import { Box, Grid } from '@mui/material'
import React, { useRef } from 'react'
import { CustomCountUp } from './CustomCountUp';

export const Records = () => {
    const countUpRef = useRef(null);
    console.log(932 % 10);
    return (
        <Box sx={{
            width: '100vw',
            height: '40vh',
            // background: 'url(https://static.vecteezy.com/system/resources/previews/002/083/635/non_2x/diversity-women-and-men-profiles-in-multicolor-frames-background-vector.jpg)',
            // backgroundSize: 'contain'
        }}>
            <Grid container style={{ height: 'inherit' }}  >
                <CustomCountUp size={6} end={100} suffix="Active Users" />
                <CustomCountUp size={6} end={1000} suffix="Memory Lived" />
            </Grid>
        </Box>
    )
}
