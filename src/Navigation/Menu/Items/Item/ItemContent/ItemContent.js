import React, { Fragment } from 'react';
import Types from 'prop-types';

import './ItemContent.less';

const ItemContent = ({ text, Icon }) => (
  <Fragment>
    <Icon className="tw-public-navigation-item-content__icon hidden-md hidden-lg hidden-xl m-r-2" />
    {text}
  </Fragment>
);

ItemContent.propTypes = {
  text: Types.string.isRequired,
  Icon: Types.func.isRequired,
};

export default ItemContent;
