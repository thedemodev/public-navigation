import React from 'react';
import Types from 'prop-types';

import Item from './Item';

const Items = ({ items }) => (
  <ul className="nav navbar-nav navbar-right">
    {items.map(item => <Item item={item} key={item.translationKey} />)}
  </ul>
);

Items.propTypes = {
  items: Types.arrayOf(Types.shape()).isRequired,
};

export default Items;
