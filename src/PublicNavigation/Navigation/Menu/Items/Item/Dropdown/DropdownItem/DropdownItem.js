import React from 'react';
import Types from 'prop-types';
import { Message } from 'retranslate';

const linkPointsToSamePage = link => link.charAt(0) === '#';

const DropdownItem = ({ translationKey, link, badge }) => (
  <li>
    <a
      href={link}
      target={linkPointsToSamePage(link) ? '_self' : undefined}
      className="text-ellipsis"
    >
      <Message>{translationKey}</Message>
      {badge && ' '}
      {badge && (
        <span className="badge badge-success">
          <Message>{badge}</Message>
        </span>
      )}
    </a>
  </li>
);

DropdownItem.propTypes = {
  translationKey: Types.string.isRequired,
  link: Types.string.isRequired,
  badge: Types.string,
};

DropdownItem.defaultProps = {
  badge: '',
};

export default DropdownItem;
