import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Element from '../util/element';
import scrollWrapper from '../util/scrollWrapper';
import "./voluntary.css";

class Voluntary extends Component {
	render() {
		return (
            <Element name="voluntary" ref={this.props.setRef} className="hc-voluntary-container hc-section px-lg-3 px-sm-0" >
                <Container fluid>
                    <Row>
                        <Col md={5}>
                            <img
                                style={{
                                    transform: `translateY(${-7 + (1 - this.props.scrollRate) * 7}%)`
                                }} 
                                className="hc-voluntary-image hc-flat-shadow"
                                src="/images/20180612_084747_cropped.jpg"
                                alt=""
                            />
                        </Col>
                        <Col className="hc-voluntary-content" md={7}>
                            <h2>SEJA VOLUNTÁRIO</h2>
                            <p>O projeto Hora do Código tem como objetivo promover práticas pedagógicas que envolvam o ensino da lógica de programação para estudantes do ensino fundamental I da rede pública de ensino. Assim, oportunizando a esses discentes autonomia na elaboração de seus próprios conhecimentos acerca da linguagem ormática/computacional.</p>
                            <h3>O que preciso para ser voluntário?</h3>
                            <Row>
                                <Col md={2}>
                                    <img src="/images/estudante-icon.png" alt=""/>
                                </Col>
                                <Col md={10}>
                                    <p>
                                        Estudar em qualquer Intituição de Ensino Superior. E você nem precisa ser programador ou ter conhecimentos nesta área. O projeto oferece uma formação básica para a realização das atividades a serem desenvolvidas na escola.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <img src="/images/relogio-icon.png" alt=""/>
                                </Col>
                                <Col md={10}>
                                    <p>
                                        É necessário que você tenha os seguintes horários disponíveis: <br/>
                                        > Às sextas-feiras, para a formação.<br/>
                                        > No mínimo dois outros turnos ao longo da semana, para o desenvolvimento das atividades. 
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <img src="/images/coracao-icon.png" alt=""/>
                                </Col>
                                <Col md={10}>
                                    <p>
                                        Amar alguma coisa.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div style={{
                        textAlign: 'center',
                        transform: `translate(${-2 + (1 - this.props.scrollRate) * 1}%, 4rem)`
                    }}>
                        <a href="/seja-voluntario" className="hc-button-large">
                            INSCREVER-SE COMO VOLUNTÁRIO
                        </a>
                    </div>
                </Container>
            </Element>
		);
	}
}

export default scrollWrapper(Voluntary);
