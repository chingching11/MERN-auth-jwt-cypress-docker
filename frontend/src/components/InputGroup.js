import React from 'react'
import { Form } from 'react-bootstrap'

function InputGroup(props){
    return(
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} 
                    onChange={(e) => {
                        props.setInput(e.target.value)
                    }}
            />
        </Form.Group>
        
    )
}

export default InputGroup;