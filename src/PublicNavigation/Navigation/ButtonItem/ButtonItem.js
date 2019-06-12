import React from 'react';
import Types from 'prop-types';
import { Message } from 'retranslate';

import './ButtonItem.less';

const ButtonItem = ({ translationKey, link, inverse, deEmphasize }) => (
  <li className="navbar-btn m-b-1">
    <a href={link} className={`btn ${getClassNames({ deEmphasize, inverse })}`}>
      <Message>{translationKey}</Message>
    </a>
  </li>
);

function getClassNames({ deEmphasize, inverse }) {
  if (deEmphasize) {
    return 'btn-link';
  }
  return inverse ? 'btn-default' : 'btn-primary';
}

ButtonItem.propTypes = {
  translationKey: Types.string.isRequired,
  link: Types.string.isRequired,
  inverse: Types.bool.isRequired,
  deEmphasize: Types.bool,
};

ButtonItem.defaultProps = {
  deEmphasize: false,
};

export default ButtonItem;
