/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { Component } from 'react';
import Types from 'prop-types';
import focusWithin from 'focus-within';

import ItemContent from './ItemContent';
import Dropdown from './Dropdown';

polyfillFocusWithinIfInBrowser();

class Item extends Component {
  static propTypes = {
    translationKey: Types.string.isRequired,
    Icon: Types.func.isRequired,
    link: Types.string,
    items: Types.arrayOf(Types.shape()),
    analyticsId: Types.string,
  };

  static defaultProps = {
    link: null,
    items: null,
    analyticsId: null,
  };

  handleMouseDown = event => {
    const { target } = event;
    const link = target.tagName.toLowerCase() === 'span' ? target.parentElement : target;

    if (link.tagName.toLowerCase() === 'a') {
      event.stopPropagation();
      link.click();
    }
  };

  render() {
    const { translationKey, link, Icon, items, analyticsId } = this.props;

    const hasItems = !!(items && items.length > 0);
    const itemContent = (
      <ItemContent translationKey={translationKey} Icon={Icon} hasCaret={hasItems} />
    );

    return (
      <li
        onMouseDown={this.handleMouseDown}
        className={hasItems ? 'dropdown' : ''}
        tabIndex="-1"
        data-analytics-id={analyticsId}
      >
        {link ? (
          <a href={link}>{itemContent}</a>
        ) : (
          <button className="dropdown-toggle" type="button">
            {itemContent}
          </button>
        )}

        {hasItems && <Dropdown items={items} />}
      </li>
    );
  }
}

function polyfillFocusWithinIfInBrowser() {
  if (typeof document !== 'undefined') {
    focusWithin(document, {
      attr: false,
      className: 'focus-within',
    });
  }
}

export default Item;
