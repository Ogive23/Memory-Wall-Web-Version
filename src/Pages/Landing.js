import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Background } from '../Components/Landing Page/Background'
import { Footer } from '../Components/Landing Page/Footer'
import { Records } from '../Components/Landing Page/Records'

export const LandingPage = () => {
    const [loadRecords, setLoadRecords] = useState(false);
    const handleScroll = (e) => {
        if (window.scrollY > 0) {
            return setLoadRecords(true);
        }
        return setLoadRecords(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <div>
            <Background />
            <Records loadRecords={loadRecords} />
            <Footer />
        </div>
    )
}
