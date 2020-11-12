import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkedAlt } from "react-icons/fa";
import {Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
        <div className="App">
            {/*<img src="background.png" className="image"></img>*/}
            <div className={"head"}>
                <Container>
                    <Row>
                        <Col>
                            <div className="container">
                                <button className="btn btn-default">
                                    <strong className="title">TrendMap
                                        <FaMapMarkedAlt></FaMapMarkedAlt></strong>
                                </button></div></Col>
                        <Col xs={6}><ul className="ul1">
                            <li>Map</li>
                            <li>TrendMap</li>
                            <li>Instagram</li>
                            <li>Contact</li>
                        </ul></Col>
                        <Col><ul className="ul2">
                            <li>Login</li>
                            <li>Sign up</li>
                        </ul></Col>
                    </Row>
                </Container>

                <Form className={"Form"}>
                    <Form.Group controlId="formBasicEmail">
                        <container>
                        <Row>
                            <Col sm={8}>
                                <Form.Control size="lg" type="search" placeholder="Search.." /></Col>
                            <Col sm={4}>
                        <Button variant="primary" type="submit">
                            Search
                        </Button></Col>
                        </Row>
                        </container>
                    </Form.Group>

                    <Form.Text className="text-muted">
                        You can find hot places through this.
                    </Form.Text>
                </Form>
            </div>

        </div>
    )
  }
}

export default App;
