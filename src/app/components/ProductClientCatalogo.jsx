import { Card, Button } from 'react-bootstrap';

export default function ProductClientCatalogo({ code, name, description, price, image, addToKart }) {

    return (
        <>
            <Card style={{ width: '18rem'}} >
                <Card.Img variant="top" src={image} width={286} height={180} />
                <Card.Body>
                    <Card.Title>{code} - {name} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Precio unitario: C${price}</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Realizar pedido</Button>
                    <Button variant="success" onClick={addToKart}><i className="bi bi-cart-plus"></i></Button>
                </Card.Body>
            </Card>
        </>
    );
}