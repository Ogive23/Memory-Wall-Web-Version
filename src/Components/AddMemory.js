import React, { useState } from 'react';
import { Container, Box, CssBaseline, Button, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Row, Col } from 'react-bootstrap';


function AddMemory() {
    const [image, setImage] = useState("");
    const [personName, setPersonName] = useState("");
    const [birthDate, setBirthDate] = useState(new Date());
    const [deathDate, setDeathDate] = useState(new Date());
    const [lifeStory, setLifeStory] = useState("");
    const [error, setError] = useState("");
    let todayDate = new Date();
    const [value, setValue] = React.useState(new Date(todayDate));
    // const handleChange = (newValue) => {
    //     setValue(newValue);
    // };
    function handleBirthDate(date) {
        let todayDate = new Date();
        setError("");
        console.log(todayDate);
        console.log(date)
        if (date >= todayDate) {
            setError("برجاء ادخال تاريخ صحيح");
        }
    }
    function handleDeathDate(date) {
        setError("");
        if (date <= birthDate) {
            setError("برجاء ادخال تاريخ صحيح");
        }
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box className='bg-light' p={5} rounded sx={{ borderRadius: 5 }}>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        رفع صورة شخصية للمتوفي
                    </Button>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="personName"
                        label="اسم المتوفي"
                        name="personName"
                        autoComplete="text"
                        autoFocus
                        onChange={(e) => { setPersonName(e.target.value) }}
                    />
                    <Box py={1} pb={2}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Row>
                                <Col>
                                    <DatePicker
                                        label="تاريخ الميلاد"
                                        value={value}
                                        selected={birthDate}
                                        onChange={handleBirthDate}
                                        renderInput={(params) => <TextField {...params} />}
                                    />

                                </Col>
                                <Col>
                                    <DatePicker
                                        label="تاريخ الوفاة"
                                        value={value}
                                        onChange={handleDeathDate}
                                        renderInput={(params) => <TextField {...params} />}
                                    />


                                </Col>
                            </Row>

                            {error &&
                                <Alert severity="error">{error}</Alert>
                            }
                        </LocalizationProvider>
                    </Box>
                    <Box py={1}>
                        <TextField fullWidth label="احكي عن المتوفي" multiline rows={4}
                            onChange={(e) => { setLifeStory(e.target.value) }}
                        />
                    </Box>
                    <Button variant="contained" sx={{
                        mx: 'auto',
                        width: 200,
                        p: 1,
                        borderRadius: 1,
                    }} style={{ background: "#363B42" }}
                    >  حفظ</Button>

                </Box>
            </Container>
        </React.Fragment >
    );
}
export default AddMemory;