import React, { Component } from 'react';
import Types from 'prop-types';

import Dropdown from './Dropdown';
import focusWithin from './focusWithin';

class Item extends Component {
  componentDidMount() {
    focusWithin(this.itemDOMElement);
  }

  render() {
    const { text, link, items } = this.props;

    return (
      <li
        ref={element => {
          this.itemDOMElement = element;
        }}
      >
        {link ? <a href={link}>{text}</a> : <button>{text}</button>}

        {items && items.length > 0 && <Dropdown items={items} />}
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
