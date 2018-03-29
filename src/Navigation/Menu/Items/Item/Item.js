import React, { Component } from 'react';
import Types from 'prop-types';

import ItemContent from './ItemContent';
import Dropdown from './Dropdown';
import focusWithin from './focusWithin';

class Item extends Component {
  componentDidMount() {
    focusWithin(this.itemDOMElement);
  }

  render() {
    const { text, link, Icon, items } = this.props;

    return (
      <li
        ref={element => {
          this.itemDOMElement = element;
        }}
      >
        {link ? (
          <a href={link}>
            <ItemContent text={text} Icon={Icon} />
          </a>
        ) : (
          <button>
            <ItemContent text={text} Icon={Icon} />
          </button>
        )}

        {items && items.length > 0 && <Dropdown items={items} />}
      </li>
    );
  }
}

Item.propTypes = {
  text: Types.string.isRequired,
  Icon: Types.func.isRequired,
  link: Types.string,
  items: Types.arrayOf(Types.shape()),
};

Item.defaultProps = {
  link: null,
  items: null,
};

export default Item;
