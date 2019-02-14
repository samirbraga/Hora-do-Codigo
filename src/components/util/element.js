import React from 'react';
import { ScrollElement  } from 'react-scroll'

class Element extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.el.removeAttribute('parentBindings');
  }

  render() {
    return (
      <section ref={r => this.el = r} {...this.props} />
    );
  }
}

export default ScrollElement(Element);