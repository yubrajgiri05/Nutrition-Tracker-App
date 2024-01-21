import { useState, useEffect } from 'react';
import Card from './Card';
import { Container, Row } from 'react-bootstrap';

const CardDisplay = () => {
    const url = `https://fakestoreapi.com/products`;
    const [data, setData] = useState([]);
  
  
  
    useEffect(() => {
      fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
    }, []);
  
    return (
    <Container>
        <Row className='gap-2'>
          {data.map((dataObj, index) => {
            return (
             <Card key={index} title={dataObj.title} description={dataObj.description} src={dataObj.image}/>
            );
          })}
      </Row>
    </Container>
    );
  }
export default CardDisplay;