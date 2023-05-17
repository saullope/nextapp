import {
    Container,
    Row,
    Column,
    Form,
    Button
} from 'react-bootstrap';

export default function Login({ options, handleSelect, handleEmail, handlePassword, handleSubmit }) {

    return (
        <div>
            <Container>
                <Form>
                    <h2>Iniciar Sesion</h2>
                    <Form.Label>Como Deseas Iniciar</Form.Label>
                    <Form.Select className="mb-3" aria-label="Default select example" onChange={handleSelect}>
                        {options.map((option) => (
                            <option value={option.value}>{option.name}</option>
                        ))}
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={handleEmail} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder='************' onChange={handlePassword}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Button 
                            variant="primary"
                            onClick={handleSubmit}>
                            <i className="bi bi-arrow-right-square"> Iniciar Sesion</i>
                        </Button>{' '}
                        <br />
                        <p><a className="link-opacity-75" href="#">¿No tienes una cuenta? Crear una.</a></p>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )

}