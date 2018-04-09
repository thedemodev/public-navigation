/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { Component } from 'react';
import Types from 'prop-types';
import focusWithin from 'focus-within';

import ItemContent from './ItemContent';
import Dropdown from './Dropdown';

focusWithin(document, {
  attr: false,
  className: 'focus-within',
});

class Item extends Component {
  handleMouseDown = event => {
    const { target } = event;

    if (target.tagName.toLowerCase() === 'a') {
      event.stopPropagation();
      target.click();
    }
  };

  render() {
    const { text, link, Icon, items } = this.props;
    const hasItems = !!(items && items.length > 0);
    const itemContent = <ItemContent text={text} Icon={Icon} hasCaret={hasItems} />;

    return (
      <li onMouseDown={this.handleMouseDown} className={hasItems ? 'dropdown' : ''}>
        {link ? (
          <a href={link}>{itemContent}</a>
        ) : (
          <button className="dropdown-toggle">{itemContent}</button>
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
