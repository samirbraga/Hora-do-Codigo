import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./footer.css";

class Footer extends Component {
    render() {
        return (
            <section className="hc-footer-container hc-section px-lg-3 px-sm-0" >
                <p>
                    CRIADO E DESENVOLVIDO COM <FontAwesomeIcon icon={['fa', 'heart']} /> POR <a
                    target="_blank" href="https://lia.ufc.br/~samirchaves">SAMIR BRAGA</a>.
                </p>
            </section>
        );
    }
}

export default Footer;
