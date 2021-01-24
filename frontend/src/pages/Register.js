import React , { useState } from 'react'
import InputGroup from "../components/InputGroup"
import { Container, Form, Button } from 'react-bootstrap';
import axios from "axios"
import { useHistory } from "react-router-dom";

function Register(){
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords don't match")
        } else {
            const user = {
                email: email,
                password: password
            }
            const url = "http://localhost:8080/register"
            axios.post(url, user, { withCredentials: true })
            .then(res => {
                if(res.status === 200){
                    console.log('success');
                    history.push('/private')
                }
            }).catch(err => {
                console.log(err)
                console.log(err.status);
            }) 
        }       
    }

    return(
        <Container className="medium-container" onSubmit={handleSubmit}>
            <h1>Register</h1>

            <Form className="form">
                <InputGroup 
                    controlId = "formBasicEmail"
                    label = "Email"
                    type = "email"
                    placeholder = "Enter email"
                    setInput = {setEmail}
                />
                <InputGroup 
                    controlId = "formBasicPassword"
                    label = "Password"
                    type = "password"
                    placeholder = "Enter password"
                    setInput = {setPassword}
                />
                <InputGroup 
                    controlId = "formBasicPassword"
                    label = "Re-enter Password"
                    type = "password"
                    placeholder = "Re-enter password"
                    setInput = {setConfirmPassword}
                />
                <Button variant="info" type="submit"> Register </Button>
            </Form>
        </Container>
    )
}

export default Register