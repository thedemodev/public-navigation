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

    const hasItems = !!(items && items.length > 0);

    const itemContent = <ItemContent text={text} Icon={Icon} hasCaret={hasItems} />;

    return (
      <li
        ref={element => {
          this.itemDOMElement = element;
        }}
      >
        {link ? (
          <a href={link}>{itemContent}</a>
        ) : (
          <button className="dropdown-button">{itemContent}</button>
        )}

        {hasItems && <Dropdown items={items} />}
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
