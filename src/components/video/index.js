import React, { Component } from 'react';
import { Container } from 'reactstrap';
import cx from 'classnames';
import scrollWrapper from '../util/scrollWrapper';
import Note from '../util/note';
import "./video.css";

class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: null
        };

        this.videoWrapper = React.createRef();

        this.toggleVideo = this.toggleVideo.bind(this);
        this.playVideo = this.playVideo.bind(this);
        this.stopVideo = this.stopVideo.bind(this);
    }

    toggleVideo() {
        this.setState(prevState => ({
            playing: !prevState.playing
        }));
    }
    
    playVideo() {
        this.setState({
            playing: true
        });
    }

    stopVideo() {
        this.setState({
            playing: false
        });
    }

    render() {
        return (
            <section ref={this.props.setRef} className="hc-video-container hc-section" >
                <Container fluid>
                    <div
                        ref={this.videoWrapper}
                        style={{ transform: `translate(${-1 + (1 - this.props.scrollRate) * 4}%, -2rem)` }} 
                        className="hc-video-wrapper hc-flat-shadow"
                    >
                        <video onPlay={this.playVideo} onPause={this.stopVideo} controls>
                            <source src="https://storage.googleapis.com/coverr-main/mp4/Albert-Dock.mp4" type="video/mp4" />
                        </video>
                        <Note
                            orientation="SE"
                            className={cx("hc-video-note", {
                                'animating': this.state.playing === true,
                                'animated': this.state.playing === false
                            })}
                            title="AÇÃO - LOREM IPSUM"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem asperiores, at quae vel repellat, nobis rem, nemo harum doloremque inventore debitis architecto. Fuga consequuntur vitae, corrupti aut odio ea.
                        </Note>
                    </div>
                </Container>
            </section>
        );
    }
}

export default scrollWrapper(Video);
