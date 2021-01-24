import React, { useEffect, useState }  from "react"
import axios from "axios"
import { Button, Container } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

function Private(){
    const history = useHistory();
    const [privateMessage, setPrivateMessage] = useState('')
    
    useEffect(() => {
        const getMessage = () => {
            axios.get('http://localhost:8080/private', { withCredentials: true }).then(
                res => {
                    console.log(res);
                    setPrivateMessage(res.data)
                }
            ).catch(err => console.log(err))
        }
        getMessage()
    }, [])

    const logout = () => {
        console.log('logout was called')
        axios.get('http://localhost:8080/deleteCookie',{ withCredentials: true })
        .then(res =>{
            console.log(res.data)
            if(res.status === 200){
                history.push('/')
            }
        }).catch(err => console.log(err))
    }
    
    return(
        <Container>
            <h1>Private Page</h1>
            <br></br>
            <h3>{privateMessage}</h3>
            <Button variant="info" onClick={logout}>Logout</Button>
        </Container>
   
    )
}

export default Private