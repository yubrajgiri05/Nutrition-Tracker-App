
import Card from './Card';
import { Container, Row } from 'react-bootstrap';

const CardDisplay = ({records}) => {
    return (
    <Container>
        <Row className='g-5'>
          {records?.map((dataObj, index) => {
            return (
             <Card key={index} title={dataObj.title} description={dataObj.description} src={dataObj.image}/>
            );
          })}
      </Row>
    </Container>
    );
  }
export default CardDisplay;