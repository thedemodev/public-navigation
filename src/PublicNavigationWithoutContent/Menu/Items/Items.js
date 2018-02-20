import React from 'react';
import Types from 'prop-types';

import Item from './Item';

const Items = ({ items }) => (
  <ul className="nav navbar-nav navbar-right">
    {items.map(itemProps => <Item {...itemProps} key={itemProps.translationKey} />)}
  </ul>
);

Items.propTypes = {
  items: Types.arrayOf(Types.shape({})).isRequired,
};

export default Items;
