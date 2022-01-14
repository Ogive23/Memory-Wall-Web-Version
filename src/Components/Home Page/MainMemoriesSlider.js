import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Factory } from "../../Helpers/Factory";
import axios from 'axios';
import { useSelector } from "react-redux";
import { Container, ThemeProvider, Typography } from "@mui/material";
import theme from "../../Themes/AppTheme";

export const MainMemoriesSlider = () => {
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const BASE_API_URL = useSelector(state => state.UserSession.BASE_API_URL);

  const initializeMemories = () => {
    axios.get(BASE_API_URL + `/api/memorywall/getTopMemories`)
      .then(res => {
        let factory = new Factory();
        setMemories(factory.getObjectsFromJson(res.data.data, "memories"));
        setLoading(false);
      })
      .catch((error) => {
        setError(error.Err_Desc);
        setLoading(false);
      });

  };

  useEffect(() => {
    initializeMemories();
    return () => { }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: '10vh', }}>
        {loading && <div>Loading</div>}
        {error && <div>error</div>}
        {!loading && memories.length === 0 && <div>Empty</div>}
        <Carousel interval={100000}>
          {memories.map((memory) => {
            console.log(memory);
            const imageUrl = BASE_API_URL + `/${memory.image}`;
            return (
              <Carousel.Item className="text-center">
                <img
                  className="d-block"
                  src={imageUrl}
                  alt={memory.personName}
                  style={{ height: 'inherit' }}
                />
                <Carousel.Caption>
                  <Typography variant='h3' color='secondary'>{memory.personName}</Typography>
                  <Typography variant='h6' color='primary' sx={{
                    lineHeight: '1.5em',
                    // height: '3em',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    // overflow: hidden;
                  }}>{memory.brief}</Typography>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </ThemeProvider>
  )
}

export default MainMemoriesSlider;
