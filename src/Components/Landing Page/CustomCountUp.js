import { Grid, Typography } from '@mui/material'
import React from 'react'
import VisibilitySensor from "react-visibility-sensor";
import CountUp from 'react-countup';
import { Animated } from "react-animated-css";
import FadeIn from 'react-fade-in';

export const CustomCountUp = ({ size, end, suffix }) => {
    return (
        <Grid item xs={size} style={{ height: 'inherit', width: 'inherit' }}  >
            <VisibilitySensor partialVisibility >
                {({ isVisible }) => (
                    <div style={{ height: 'inherit' }}>
                        {isVisible ? <CountUp end={end} duration={5} redraw={true} prefix={'+'} /> : null}
                        <Typography>{suffix}</Typography>
                    </div>
                )}
            </VisibilitySensor>

        </Grid>
    )
}
