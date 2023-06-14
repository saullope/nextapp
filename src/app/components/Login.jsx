"use client"

import {
    Container,
    Row,
    Column,
    Form,
    Button
} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useState } from 'react';

export default function Login() {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const redirect = data => {
        const { rol, email, password } = data;

        rol === 'admin' ? window.location.href = '/admin' : window.location.href = '/inicio-cliente';
    }

    return (
        <div>
            <Container>
                <Form onSubmit={handleSubmit(redirect)}>
                    <h2>Iniciar Sesion</h2>
                    <Form.Label>Como Deseas Iniciar</Form.Label>
                    <Form.Select className="mb-3" aria-label="Default select example"
                        {...register("rol")}>
                        <option value='admin' >Administrador</option>
                        <option value='customer'>Cliente</option>
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
                        <Button
                            variant="primary"
                            type="submit"
                        >
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