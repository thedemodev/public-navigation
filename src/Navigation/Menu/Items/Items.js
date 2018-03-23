import React from 'react';
import Types from 'prop-types';

import Item from './Item';

const Items = ({ items }) => (
  <ul className="nav navbar-nav navbar-right">
    {items.map(item => <Item {...item} key={item.text} />)}
  </ul>
);

Items.propTypes = {
  items: Types.arrayOf(
    Types.shape({
      text: Types.string.isRequired,
    }),
  ).isRequired,
};

export default Items;
