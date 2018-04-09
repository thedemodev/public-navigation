import React from 'react';
import Types from 'prop-types';
import focusWithin from 'focus-within';

import ItemContent from './ItemContent';
import Dropdown from './Dropdown';

focusWithin(document, {
  attr: false,
  className: 'focus-within',
});

const Item = ({ text, link, Icon, items }) => {
  const hasItems = !!(items && items.length > 0);

  const itemContent = <ItemContent text={text} Icon={Icon} hasCaret={hasItems} />;

  return (
    <li className={`${hasItems ? 'dropdown' : ''}`}>
      {link ? (
        <a href={link}>{itemContent}</a>
      ) : (
        <button className="dropdown-button">{itemContent}</button>
      )}

      {hasItems && <Dropdown items={items} />}
    </li>
  );
};

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
