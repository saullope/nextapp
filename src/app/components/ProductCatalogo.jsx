import { Card, Row, Col } from 'react-bootstrap';

export default function ProductCatalogo({ code, name, description, price, image }) {

    const style = {
        cursor: "pointer"
    };

    return (
        <div>
            <Card border="primary" className='mb-3' style={style} >
                <Row>
                    <Col sm="2">
                        <Card.Img variant='start' src={image} width={100} height={80} />
                    </Col>
                    <Col>
                        <Card.Title>{`${name} - ${code}`}</Card.Title>
                        <Card.Text>{`${description} - precio: C$ `} <strong>{price}</strong></Card.Text>
                    </Col>
                </Row>
            </Card>
            <br />
        </div>
    );
}

/**
 * <Card.Img variant='end' src={image} />
                <Card.Title>{`${name} - ${code}`}</Card.Title>
                <Card.Text>{`${description} - precio: C$${price}`}</Card.Text>
 */