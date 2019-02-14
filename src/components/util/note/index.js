import React, { Component } from 'react';
import cx from "classnames";
import "./note.css";

class Note extends Component {
    render() {
        let bottom, left, top, right;

        if (this.props.orientation === 'SE') {
            top = 'initial';
            left = 'initial';
            right = 0;
            bottom = 0;
        }

        return (
            <div 
                {...this.props}
                style={{
                    bottom, left, top, right,
                    ...this.props.style
                }}
                className={cx('hc-note-container', 'hc-flat-shadow', this.props.className)}>
                <h3>{this.props.title}</h3>
                <div className="hc-note-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Note;   