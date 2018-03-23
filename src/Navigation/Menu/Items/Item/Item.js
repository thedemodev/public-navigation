import React, { Component } from 'react';
import Types from 'prop-types';

import Dropdown from './Dropdown';
import focusWithin from './focusWithin';

class Item extends Component {
  componentDidMount() {
    focusWithin(this.itemDOMElement);
  }

  render() {
    return (
      <li
        ref={element => {
          this.itemDOMElement = element;
        }}
      >
        <a href={this.props.link}>{this.props.text}</a>

        {this.props.items && this.props.items.length > 0 && <Dropdown items={this.props.items} />}
      </li>
    );
  }
}

Item.propTypes = {
  text: Types.string.isRequired,
  link: Types.string,
  items: Types.arrayOf(Types.shape()),
};

Item.defaultProps = {
  link: null,
  items: null,
};

export default Item;
