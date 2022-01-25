import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import "./form.css";
function Formulaire() {
    return (
        <div>
            <>
                <Form.Group className="mb-3">
                    <Form.Label>Enter your first name</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter your family name</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>choose your study level</Form.Label>
                    <Form.Select>
                        <option>1st year</option>
                        <option>2nd year</option>
                        <option>3rd year</option>
                    </Form.Select>
                </Form.Group>
            </>
            <Form.Group className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Enter your Email adress:
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext placeholder="email@example.com" />
                </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Enter your Password:
                </Form.Label>
                <Col>
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    label="I agree the institution policy"
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </div>
    );
}
export default Formulaire;
