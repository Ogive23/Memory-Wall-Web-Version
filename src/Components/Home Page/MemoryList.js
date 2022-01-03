import { Pagination } from "@mui/material";
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import MemoryCard from "./MemoryCard";
import axios from 'axios';
import { Factory } from "../../Helpers/Factory";
import { useSelector } from "react-redux";

export const MemoryList = () => {
  const [memories, setMemories] = useState([]);
  const [total, setTotal] = useState();
  const [current_page, setCurrrentPage] = useState(1);
  const [per_page, setPerPage] = useState();
  const [error, setError] = useState('');
  const BASE_API_CALLER = useSelector(state => state.UserSession.BASE_API_URL);

  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    fetchMemories(pageNumber);
  };

  function fetchMemories(current_page) {
    axios.get(BASE_API_CALLER + `/api/memorywall/memories?page=${current_page}`)
      .then(res => {
        let factory = new Factory();
        setMemories(factory.getObjectsFromJson(res.data.data.data, "memories"));
        setPerPage(res.data.data.per_page);
        setTotal(res.data.data.total);
        setCurrrentPage(res.data.data.data.current_page);

      })
      .catch((error) => setError(error.Err_Desc));
  }
  useEffect(() => {
    fetchMemories(current_page);
  }, []);

  if (error) return <h1>{error}</h1>;
  return (
    <Container>
      <Row xs={1} md={3}>
        {memories.map((memory) => {
          return (
            <Col key={memory.id}>
              <MemoryCard memory={memory} />
            </Col>
          );
        })}
      </Row>
      <Pagination onPageChange={""} style={{ background: '#fff' }} count={10} color="primary" />
    </Container>
  )
};
export default MemoryList;
