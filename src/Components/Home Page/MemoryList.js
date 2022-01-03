import { Box } from "@mui/material";
import Pagination from "react-js-pagination";
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
// import { Factory } from "../Helpers/Factory";
import MemoryCard from "./MemoryCard";
import axios from 'axios';
import { useSelector } from "react-redux";

function MemoryList() {
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
    axios.get(`http://127.0.0.1:8000/api/memorywall/memories?page=${current_page}`)
    axios.get(BASE_API_CALLER + `/api/memorywall/memories?page=${current_page}`)
      .then(res => {
        setMemories(res.data.data.data);
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
    <div>
      <Container>
        <Row xs={1} md={3} mb={4}>
          {memories.map((memory) => {
            return (
              <Box pb={6}>
                <Col key={memory.id}>
                  <MemoryCard memory={memory} />
                </Col>
              </Box>

            );
          })}
        </Row>

        {/* <Pagination onPageChange={""} style={{ background: '#fff' }} count={10} /> */}
        <Pagination
          activePage={current_page}
          itemsCountPerPage={per_page}
          totalItemsCount={total}
          pageRangeDisplayed={5}
          onChange={(pageNumber) => { handlePageChange(pageNumber) }}
          itemClass="page-item"
          linkClass="page-link"
          firstPageText='First'
          lastPageText="Last"
        />
      </Container>
    </div>
  )
};
export default MemoryList;
// export class MemoryList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       memories,
//     };
//   }
//   render() {
//     let factory = new Factory();
//     try {
//       this.state.memories = factory.getObjectsFromJson(memories, "memories");
//       return (
//         <Container>
//           <Row xs={1} md={3}>
//             {this.state.memories.map((memory) => {
//               return (
//                 <Col key={memory.id}>
//                   <MemoryCard memory={memory} />
//                 </Col>
//               );
//             })}
//           </Row>
//           <Pagination onPageChange={""} style={{ background: '#fff' }} count={10} color="primary" />
//         </Container>
//       );
//     } catch (DataObjectTypeNotFound) {
//       console.log(DataObjectTypeNotFound.message);
//     }
//   }
// }

// export default MemoryList;
