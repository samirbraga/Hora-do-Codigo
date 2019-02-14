import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import scrollWrapper from "../util/scrollWrapper";
import Element from '../util/element';
import "./contact.css";

class Contact extends Component {
    render() {
        return (
            <Element name="contact" ref={this.props.setRef} className="hc-contact-container hc-section px-lg-3 px-sm-0">
                <Container className="hc-contact-wrapper h-100" fluid>
                    <Row>
                        <Col
                            style={{
                                transform: `translateY(${-10 + (1 - this.props.scrollRate) * 20}%)`
                            }}
                            md={3}
                            className="hc-side-square"
                        >
                            <h2
                            >
                                RESTOU<br />
                                ALGUMA<br />
                                DÚVIDA?
							</h2>
                        </Col>
                        <Col className="hc-contact-form" md={9}>
                            <h3>ENTRE EM CONTATO CONOSCO</h3>
                            <form action="">
                                <Row>
                                    <Col md={6}>
                                        <input placeholder="NOME" type="text" />
                                    </Col>
                                    <Col md={6}>
                                        <input placeholder="EMAIL" type="text" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <textarea placeholder="MENSAGEM" name="" id="" cols="30" rows="10"></textarea>
                                    </Col>
                                </Row>
                                <button className="hc-contact-button hc-button-median">
                                    ENVIAR
                                </button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </Element>
        );
    }
}

export default scrollWrapper(Contact);