import React, { Component } from 'react';
import { Container } from 'reactstrap';
import scrollWrapper from '../util/scrollWrapper';
import Note from '../util/note';
import "./wallpaper.css";

class Wallpaper extends Component {
    render() {
        return (
            <section ref={this.props.setRef} className="hc-wallpaper-container hc-section px-lg-3 px-sm-0">
                <Container className="hc-wallpaper-wrapper h-100" fluid>
                    <Note
                        style={{
                            transform: `translateY(${-20 + (1 - this.props.scrollRate) * 70}%)`
                        }}
                        orientation="SE"
                        className={"hc-wallpaper-note"}
                        title="AÇÃO - LOREM IPSUM"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem asperiores, at quae vel repellat, nobis rem, nemo harum doloremque inventore debitis architecto. Fuga consequuntur vitae, corrupti aut odio ea.
                    </Note>
                </Container>
            </section>
        );
    }
}

export default scrollWrapper(Wallpaper, { clamped: true });