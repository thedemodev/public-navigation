import React from 'react';
import Types from 'prop-types';

import Dropdown from './Dropdown';

const Item = ({ translationKey, link, items }) => (
  <li>
    <a href={link}>{translationKey}</a>

    {items && items.length > 0 && <Dropdown items={items} />}
  </li>
);

Item.propTypes = {
  translationKey: Types.string.isRequired,
  link: Types.string,
  items: Types.arrayOf(Types.shape()),
};

Item.defaultProps = {
  link: null,
  items: null,
};

export default Item;
