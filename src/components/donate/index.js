import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Element from '../util/element';
import "./donate.css";

class Donate extends Component {
    render() {
        return (
            <Element name="donate" className="hc-donate-container hc-section">
                <Container fluid>
                    <Row className="pl-lg-3 ml-lg-0 ml-sm-3 pl-sm-0" >
                        <Col className="hc-donate-content" md={6}>
                            <h2>PRECISAMOS DA SUA DOAÇÃO</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non et consequatur ad assumenda, nulla ut alias! Vel, atque. Quisquam et nemo recusandae excepturi obcaecati nostrum. Aliquid sunt sed nam incidunt?</p>
                        </Col>
                        <Col className="hc-donate-square hc-flat-shadow" md={6}>
                            <span className="hc-donate-square-text">
                                <span className="h2" >AJUDE-NOS A</span><br />
                                <span className="h3">CONTINUAR LEVANDO </span><br />
                                <span className="h3">CADA VEZ MAIS </span><br />
                                <span className="h1">SORRISOS!</span>
                            </span>
                            <a href="/doacao" className="hc-button-median">
                                FAZER UMA DOAÇÃO
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Element>
        );
    }
}

export default Donate;