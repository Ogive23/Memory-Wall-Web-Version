import { Box, Grid, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import VisibilitySensor from "react-visibility-sensor";
import CountUp from 'react-countup';
import theme from './../../Themes/AppTheme';



export const CustomCountUp = ({ size, end, suffix, icon }) => {
    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={size} sx={{ height: 'inherit', width: 'inherit', textAlign: 'center', margin: 'auto' }}  >
                <VisibilitySensor partialVisibility >
                    {({ isVisible }) => (
                        <Box sx={{
                            height: 'inherit', display: 'flex',
                            alignItems: 'center',
                            alignContent: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            flexWrap: 'nowrap',
                        }}>
                            {icon}
                            <Typography variant='h4' color='secondary'>{suffix}</Typography>
                            {isVisible ? <CountUp end={end} duration={5} delay={0} redraw={true} prefix={'+'} style={{ color: 'primary' }} >
                                {({ countUpRef }) => (
                                    <Typography variant='h5' color='primary' ref={countUpRef} />
                                )}
                            </CountUp> : null}
                        </Box>
                    )}
                </VisibilitySensor>
            </Grid>
        </ThemeProvider>
    )
}
