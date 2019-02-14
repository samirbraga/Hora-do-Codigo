import React, { Component} from 'react';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import Element from '../util/element';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./team.css";

class Voluntary extends Component {
    constructor(props) {
		super(props);
		
		this.team = [{
			name: 'SAMIR BRAGA',
			avatar: '/images/samir-avatar.jpg',
			description: 'Olá! Sou estudante de Ciência da Computação na UFC, onde participo do laboratório Insight Data Science e do projeto Hora do código. No tempo livre gosto de ler, desenhar, programar... E trabalho criando aplicativos e sites, como esse que você está!',
			network: [
				{ type: 'fb', href: 'https://www.facebook.com/samir.braga.5' },
				{ type: 'insta', href: 'https://www.instagram.com/samirbchaves' },
				{ type: 'gh', href: 'https://github.com/samirbraga' }
			]
		}, {
			name: 'SAN DIEGO',
			avatar: '/images/sandiego-avatar.jpg',
				description: '20 anos, estudante de Ciência da Computação - UFC. Sou membro do grupo de pesquisa LOGIA (Lógica e Inteligencia Artificial) e voluntário no projeto A Hora do Código nas Escolas. Sou um amante e aprendiz da arte dos quadrinhos. Adoro esportes e pedalar pela cidade nas horas vagas.',
			network: [
				{ type: 'fb', href: 'https://www.facebook.com/diego.leto3' },
				{ type: 'insta', href: 'https://www.instagram.com/sandiegocastilho' },
				{ type: 'gh', href: 'https://github.com/SanDiegoCastilho' },
			]
		}, {
			name: 'ANDREZA FERNANDES',
			avatar: '/images/andreza-avatar.jpg',
			description: 'Oi! Me chamo Andreza Fernandes, tenho 20 anos, e curso Ciência da Computação na UFC! Sou membro do laboratório Insight Data Science Lab e do projeto Hora do Código nas Escolas. Gosto muito de conhecer novas pessoas, lugares, fazer amigos, estar engajada em projetos e atividades, programar, desenhar, cozinhar e escrever.',
			network: [
				{ type: 'fb', href: 'https://www.facebook.com/DrocksF' },
				{ type: 'insta', href: 'https://www.instagram.com/_andfernandes ' },
				{ type: 'gh', href: 'https://github.com/andyfernandes ' },
			]
		}, {
			name: 'ARINA SANCHES',
			avatar: '/images/arina-avatar.jpg',
			description: 'Me chamo a Arina, sou de Cabo Verde e estudo ciência da computação na UFC. Gosto de viajar, ler, assistir series e divertir-me com os meus amigos.',
			network: [
				{ type: 'fb', href: 'https://www.facebook.com/arina.sanches' },
				{ type: 'insta', href: 'https://www.instagram.com/arinasanches' },
			]
		},{
			name: 'EDSON PINHEIRO',
			avatar: '/images/edson-avatar.jpg',
			description: 'Sou Edson Pinheiro, 22 anos, faço Rede de Computadores na Estácio FIC, sou membro do projeto Hora do Código nas Escolas, atualmente trabalho na Automais com venda de veículos. Curto jogar videogame e fazer exercício físico.',
			network: [
				{ type: 'fb', href: 'https://www.facebook.com/edson.pinheiro.12382' },
				{ type: 'insta', href: 'https://www.instagram.com/edson_pin' }
			]
		}, {
			name: 'FRANCISCO WESLEY',
			avatar: '/images/wesley-avatar.jpg',
			description: 'Sou Wesley, tenho 19 anos. Curso Matemática Industrial na UFC. Jogo basquete, xadrez e outros esportes. Gosto de filosofia, cinema, algoritmos e quadrinhos.',
			network: [
				{ type: 'fb', href: 'https://www.facebook.com/fw.santos.1' },
				{ type: 'insta', href: 'https://www.instagram.com/blade_baiano' }
			]
		}, {
			name: 'SAN DIEGO',
			avatar: '/images/sandiego-avatar.jpg',
			description: 'Enim minim sit ut esse quis amet labore aliquip proident irure in tempor dolor ipsum. Cupidatat veniam elit minim irure Lorem consequat ullamco eiusmod proident sunt incididunt Lorem anim duis. Veniam sunt velit laborum ullamco et culpa.',
			network: [
				{ type: 'fb', href: 'https://www.facebook.com/diego.leto3' },
				{ type: 'insta', href: 'https://www.instagram.com/sandiegocastilho' },
				{ type: 'gh', href: 'https://github.com/SanDiegoCastilho' },
			]
		}, {
			name: 'SAN DIEGO',
			avatar: '/images/sandiego-avatar.jpg',
			description: 'Enim minim sit ut esse quis amet labore aliquip proident irure in tempor dolor ipsum. Cupidatat veniam elit minim irure Lorem consequat ullamco eiusmod proident sunt incididunt Lorem anim duis. Veniam sunt velit laborum ullamco et culpa.',
			network: [
				{ type: 'fb', href: 'https://www.facebook.com/diego.leto3' },
				{ type: 'insta', href: 'https://www.instagram.com/sandiegocastilho' },
				{ type: 'gh', href: 'https://github.com/SanDiegoCastilho' },
			]
		}, {
			name: 'SAN DIEGO',
			avatar: '/images/sandiego-avatar.jpg',
			description: 'Enim minim sit ut esse quis amet labore aliquip proident irure in tempor dolor ipsum. Cupidatat veniam elit minim irure Lorem consequat ullamco eiusmod proident sunt incididunt Lorem anim duis. Veniam sunt velit laborum ullamco et culpa.',
			network: [
				{ type: 'fb', href: 'https://www.facebook.com/diego.leto3' },
				{ type: 'insta', href: 'https://www.instagram.com/sandiegocastilho' },
				{ type: 'gh', href: 'https://github.com/SanDiegoCastilho' },
			]
		}]
    };

	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		};

		return (
			<Element name="team" ref={this.container} className="hc-team-container hc-section px-lg-3 px-sm-0" >
				<Container fluid>
					<h2>A EQUIPE HORA DO CÓDIGO</h2>
					<Slider className="hc-team-slider" {...settings}>
						{this.team.map((person, i) => (
							<div key={person.name + i} className="hc-team-slide">
								<div>
									<img className="hc-flat-shadow d-inline-block" src={person.avatar} alt={`${person.name} - VOLUNTÁRIO HORA DO CÓDIGO`}/>
									<h3 className="d-inline-block align-middle">
										{person.name.split(' ').slice(0, 2).map((name, i) => (
											<span key={name + i}>{name} <br/></span>
										))}
									</h3>
								</div>
								<div className="hc-team-slide-content d-flex">
									<div className="hc-team-slide-network">
										{person.network.map((net, i) => {
											let social = {
												"fb": "facebook",
												"insta": "instagram",
												"gh": "github"
											};

											return (
												<a key={net.href + i} className="hc-team-slide-network-icon" href={net.href}>
													<FontAwesomeIcon size="lg" icon={['fab', social[net.type]]} />
												</a>
											);
										})}
									</div>
									<div className="hc-team-slide-description hc-flat-shadow">
										<p>{person.description}</p>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</Container>
			</Element>
		);
	}
}

export default Voluntary;