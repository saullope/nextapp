"use client"

import {
    Container,
    Form,
    Button,
    Spinner,
    Toast
} from 'react-bootstrap';
import { set, useForm } from "react-hook-form";
import { useState } from 'react';

export default function Login() {

    const [respond, setRespond] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const mensajeTiempo = () => {
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };

    async function handlePost(data) {

        try {
            setLoading(true);

            const url = 'http://localhost:3000/api/login';
            const body = data;
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            const dataResponse = await response.json();
            const status = await response.ok;

            if (status) {
                setRespond(dataResponse);
                body.rol === "Administrador" ? window.location.href = "/admin" : window.location.href = "/inicio-cliente";
                setShow(true);
            } else {
                setMessage(dataResponse.message);
                setShowMessage(true);
                mensajeTiempo();
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div>
            <Container>
                <Form onSubmit={handleSubmit(handlePost)}>
                    <h2>Iniciar Sesion</h2>
                    <Form.Label>Como Deseas Iniciar</Form.Label>
                    <Form.Select className="mb-3" aria-label="Default select example"
                        {...register("rol")}>
                        <option value='Administrador' >Administrador</option>
                        <option value='Cliente'>Cliente</option>
                    </Form.Select>
                    <Form.Group className="mb-3" >
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" isInvalid={errors.email || errors.pattern}
                            {...register("email", { required: true, pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder='************' isInvalid={errors.password}
                            {...register("password", { required: true })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <div> <Button
                            variant="primary"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? <Spinner animation="grow" variant="success" size='sm' /> : <i className="bi bi-arrow-right-square"></i>}
                            {loading ? "Cargando..." : "Iniciar Sesion"}
                        </Button>{' '}
                        </div>
                        <div>
                            <Toast show={show} bg={"light"}>
                                <Toast.Body ><p className='text-success'>Bienvenido, te estamos redirigiendo...</p></Toast.Body>
                            </Toast>
                        </div>
                        <br />
                        <Toast show={showMessage} bg={"light"}>
                            <Toast.Body ><p className='text-danger'>{message}</p></Toast.Body>
                        </Toast>
                        <br />
                        <p><a className="link-opacity-75" href="#">¿No tienes una cuenta? Crear una.</a></p>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )

}