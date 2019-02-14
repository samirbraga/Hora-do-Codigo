import React, { Component, Fragment } from 'react';
import cx from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll';
import Element from '../util/element';
import "./introduce.css";

class Introduce extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            sections: [{
                section: 'introduce',
                label: 'HOME'
            }, {
                section: 'voluntary',
                label: 'SEJA VOLUNTÁRIO'
            }, {
                section: 'about',
                label: 'CONHEÇA-NOS'
            }, {
                section: 'team',
                label: 'EQUIPE'
            }, {
                section: 'donate',
                label: 'DOAÇÃO'
            }, {
                section: 'contact',
                label: 'ENTRE EM CONTATO'
            }]
        };
    }

    render() {
        return (
            <Fragment>
                <Element name="introduce" className="hc-introduce-container">
                    <div className="d-flex justify-content-between">
                        <div className="hc-logo hc-flat-shadow">
                            <a href="/">
                                <img src="/images/logo.png" alt="Logotipo - Hora do Código nas Escolas"/>
                            </a>
                        </div>
                        <div className={cx("hc-menu hc-flat-shadow", {
                            "open": this.state.open
                        })}>
                            <div
                                className="hc-menu-icon hc-menu-icon-bars"
                                onClick={() => {
                                    this.setState(prevState => ({
                                        open: !prevState.open
                                    }));
                                }}
                            >
                                <div style={{ width: '32px' }} />
                                <div style={{ width: '28px' }} />
                                <div style={{ width: '24px' }} />
                            </div>
                            <div className="hc-menu-icon">
                                <FontAwesomeIcon color="#00b3a8" size={'lg'} icon={['fab', 'instagram']} />
                            </div>
                            <div className="hc-menu-icon">
                                <FontAwesomeIcon color="#00b3a8" size={'lg'} icon={['fab', 'facebook']} />
                            </div>
                            <div className="hc-menu-icon">
                                <FontAwesomeIcon color="#00b3a8" size={'lg'} icon={['fab', 'github']} />
                            </div>
                        </div>
                    </div>
                </Element>
                <div 
                    className={cx("hc-menu-container", {
                        "open": this.state.open
                    })}
                >
                    <div className="hc-menu-list">
                        <ul>
                            {this.state.sections.map((section, i) => (
                                <li key={section.section + i}>
                                    <Link onClick={() => this.setState({ open: false })} smooth={true} to={section.section}>
                                        {section.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Introduce;   