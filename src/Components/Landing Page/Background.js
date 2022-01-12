import { Box, Button } from '@mui/material'
import React, { useRef } from 'react'

export const Background = () => {
    const background = useRef(null);
    const buttonBackground = useRef(null);
    const showEnterButton = () => {
        background.current.style.filter = 'grayscale(100%)';
        buttonBackground.current.style.display = 'flex';
    }
    const hideEnterButton = () => {
        background.current.style.filter = 'grayscale(0%)'
        buttonBackground.current.style.display = 'none';
    }
    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            background: 'url(https://static.vecteezy.com/system/resources/previews/002/083/635/non_2x/diversity-women-and-men-profiles-in-multicolor-frames-background-vector.jpg)',
            backgroundSize: 'contain'
        }} onMouseEnter={showEnterButton} onMouseLeave={hideEnterButton} ref={background}>
            <Box sx={{
                background: 'rgba(0,0,0,0.3)',
                width: '100wv',
                height: '100vh', justifyContent: 'center', display: 'none'
            }} ref={buttonBackground} className="text-center">
                <Button variant="contained" className="px-4" sx={{ marginTop: 'auto', marginBottom: 'auto', borderRadius: '10px' }} >Start your Journey</Button>
            </Box>
        </Box>
    )
}
