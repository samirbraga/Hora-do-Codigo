import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import scrollWrapper from "../util/scrollWrapper";
import Element from '../util/element';
import "./about.css";

class About extends Component {
	render() {
		return (
			<Element name="about" ref={this.props.setRef} className="hc-about-container hc-section px-lg-3 px-sm-0" >
				<Container fluid>
                    <Row>
                        <Col className="hc-about-content" md={7}>
                            <h2><span className="h5">CONHEÇA MAIS SOBRE</span><br/> A HORA DO CÓDIGO</h2>
                            <p>Somos um grupo que, utilizando inicialmente a plataforma code.org, busca apresentar conhecimentos ligados à Ciência da Computação às crianças amparadas pela rede de ensino público, prioritariamente em regiões de baixo IDH. Procuramos, de forma criativa e lúdica, trazer uma didática que integre os saberes cotidianos aos conteúdos propostos pelo projeto.</p>
                            <p>Essa iniciativa vem para agregar conhecimentos e suprir uma área pouco desenvolvida dentro dos espaços escolares, uma vez que não existe ainda uma disciplina que trabalhe a Ciência da Computação nos anos iniciais do ensino fundamental.</p>
                            <p>Através das atividades propostas, buscaremos provocar a curiosidade e o interesse dos jovens, e, a partir desse vínculo inicial espera-se que os alunos participantes possam continuar desenvolvendo essas habilidades por conta própria.</p>
                            <p>Em suma, almejamos criar uma ponte entre as crianças participantes e a área da tecnologia, procurando ajudá-los no processo de descoberta desses novos meios de aprendizagem e auxiliando-os no uso dessas novas fontes e formas de aprender. </p>
                        </Col>
                        <Col md={5}>
                            <img
								style={{
										transform: `translateY(${(1 - this.props.scrollRate) * 8}%)`
								}} 
                                className="hc-about-image hc-flat-shadow"
                                src="/images/20180612_084747_cropped.jpg"
                                alt=""
                            />
                        </Col>
                    </Row>
				</Container>
			</Element>
		);
	}
}

export default scrollWrapper(About);
