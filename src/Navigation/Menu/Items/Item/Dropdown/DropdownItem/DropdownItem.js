import React from 'react';
import Types from 'prop-types';

const DropdownItem = ({ text, link, badge }) => (
  <li>
    <a href={link} className="text-ellipsis">
      {text}
      {badge && ' '}
      {badge && <span className="badge badge-success">{badge}</span>}
    </a>
  </li>
);

DropdownItem.propTypes = {
  text: Types.string.isRequired,
  link: Types.string.isRequired,
  badge: Types.string,
};

DropdownItem.defaultProps = {
  badge: '',
};

export default DropdownItem;
