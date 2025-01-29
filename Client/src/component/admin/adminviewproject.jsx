import { useEffect, useState } from 'react';
import axios from 'axios'; // Assuming you're using lowercase 'axios'
import { Container, Row, Col, Card, CardBody, CardTitle, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

export default function Viewproject() {
  const idn = sessionStorage.getItem('userid');
  const [developers, setDevelopers] = useState([]);
  const [isDetailsVisible, setIsDetailsVisible] = useState(new Array(developers.length).fill(false));

  useEffect(() => {
    const url = `http://localhost:8000/fetchallproject`;
    axios.get(url)
      .then((response) => {
        setDevelopers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching developers:', error);
      });
  }, []);

  const toggleDetails = (index) => {
    setIsDetailsVisible((prevDetailsVisible) => {
      const updatedDetailsVisible = [...prevDetailsVisible];
      updatedDetailsVisible[index] = !prevDetailsVisible[index];
      return updatedDetailsVisible;
    });
  };
  
  const verify = (id) => {
 axios.post("http://localhost:8000/verify",{id,status:'verified'})
  };

  return (
    <Container>
      <center>
        <h1>VIEW PROJECT DETAILS</h1>
        <h5>Crafting Tomorrow's Solutions Today</h5>
      </center>
      {developers.length > 0 ? (
        <Row>
          {developers.map((developer, index) => (
            <Col xs={12} md={6} lg={4} key={developer.id} className='rounded shadow p-2 border mt-3'>
              <Card>
                <CardBody>
                  <CardTitle>{developer.pname}</CardTitle>
                
                  {!isDetailsVisible[index] && (
                    <Button variant="primary" size="sm" onClick={() => toggleDetails(index)}>
                      View More
                    </Button>
                  )}
                  {isDetailsVisible[index] && (
                    <ListGroup>
                      <ListGroupItem><strong>Client Name:</strong> {developer.cname}</ListGroupItem>
                      <ListGroupItem><strong>Developer Name:</strong> {developer.dname}</ListGroupItem>
                      <ListGroupItem><strong>Deadline:</strong> {developer.deadline}</ListGroupItem>
                      <ListGroupItem><strong>Project Description:</strong> {developer.pdesc}</ListGroupItem>
                    </ListGroup>
                  )}
                  {isDetailsVisible[index] && (
                    <><br></br>
                      
                      
                      <Button variant="primary" size="sm" onClick={() => verify(developer._id)}>VERIFY </Button>
                    </>
                  )}
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No projects found.</p>
      )}
    </Container>
  );
}
