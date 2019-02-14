import React, { Component } from 'react';
import { isMobile } from "react-device-detect";

export default function (WrappedComponent, props={}) {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                scrollRate: 0
            };

            this.container = React.createRef();
            this.updateScroll = this.updateScroll.bind(this);
        }

        componentDidMount() {
            document.addEventListener('scroll', this.updateScroll);
        }

        componentWillUnmount() {
            document.removeEventListener('scroll', this.updateScroll);
        }

        setRef = ref => {
            this.container = ref;
        }

        updateScroll(e) {
            if (!isMobile) {
                let { offsetTop, offsetHeight } = this.container;
                let { scrollY } = window;
                if (props.clamped) {
                    let min = offsetTop - offsetHeight;
                    let max = offsetTop - 100;
                    if (scrollY < min) scrollY = min;
                    if (scrollY > max) scrollY = max;
                }
    
                this.setState({
                    scrollRate: (offsetTop - scrollY) / 200
                });
            }
        }

        render() {
            return (
                <WrappedComponent
                    setRef={this.setRef}
                    scrollRate={this.state.scrollRate}
                    {...this.props}
                />
            );
        }
    }
}