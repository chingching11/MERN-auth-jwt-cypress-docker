import React , { useState }from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import InputGroup from "../components/InputGroup"
import axios from "axios"
import { useHistory } from "react-router-dom";

function Login(){
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e) => {
      e.preventDefault()
      const user = {
        email: email,
        password: password
      }
      const url = "http://localhost:8080/auth"
      axios.post(url, user, { withCredentials: true })
      .then(res => {
          if(res.status === 200){
            history.push('/private')
          }
        }
      ).catch(err => console.log(err)) 
    }
    return(
        <Container className="medium-container">
            <h1>Login</h1>

            <Form className="form" onSubmit={handleSubmit}>
                <InputGroup 
                    controlId = "formBasicEmail"
                    label = "Email"
                    type = "email"
                    placeholder = "Enter username"
                    setInput = {setEmail}
                />
                <InputGroup 
                    controlId = "formBasicPassword"
                    label = "Password"
                    type = "password"
                    placeholder = "Enter password"
                    setInput = {setPassword}
                />
                <Button variant="info" type="submit"> Login </Button>
            </Form>
            <Button variant="outline-info" href="/register">Create New Account</Button>
        </Container>
    )
}

export default Login;