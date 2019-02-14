import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import scrollWrapper from "../util/scrollWrapper";
import "./explain.css";

class Explain extends Component {
	render() {
		return (
			<section ref={this.props.setRef} className="hc-explain-container hc-section" >
				<Container fluid>
					<Row>
						<Col md={3} className="hc-side-square">
							<h2
								style={{
									transform: `translateY(${-10 + (1 - this.props.scrollRate) * 20}%)`
								}} 
							>
								COMO<br />
								SURGIU O<br />
								PROJETO?
							</h2>
						</Col>
						<Col md={9} className="hc-explain-content mt-md-0 mt-sm-4">
							<p>
								O projeto Hora do Código tem como objetivo promover práticas pedagógicas que envolvam o ensino da lógica de programação para estudantes do ensino fundamental I da rede pública de ensino. Assim, oportunizando a esses discentes autonomia na elaboração de seus próprios conhecimentos acerca da linguagem informática/computacional.
							</p>
							<Row className="hc-explain-icons">
								<Col md={4}>
									<img src="/images/lego-icon.png" alt=""/>
									<span>Estudantes do Ensino <br/>fundamental I</span>
								</Col>
								<Col md={4}>
									<img src="/images/robot-icon.png" alt=""/>
									<span>Oriundos da Rede Pública de <br/>Ensino</span>
								</Col>
								<Col md={4}>
									<img src="/images/escola-icon.png" alt=""/>
									<span>Elaboração de conhecimentos <br/> de informática e computação</span>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default scrollWrapper(Explain);
