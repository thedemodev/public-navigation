import React from 'react';
import Types from 'prop-types';
import requiredIf from 'react-required-if';
import { Message } from 'retranslate';
import Badge from '../../../../../common/Badge';
import isActiveLink from '../../../../../../../common/utils/isActiveLink';

import './DropdownItem.less';

const linkPointsToSamePage = link => link.charAt(0) === '#';

const DropdownItem = ({
  titleTranslationKey,
  titleTranslatedText,
  descriptionTranslationKey,
  image,
  link,
  badge,
  activePath,
  className,
}) => (
  <li className={className}>
    <a
      href={link}
      target={linkPointsToSamePage(link) ? '_self' : undefined}
      className="callout-container dropdown-content"
    >
      {image && <img className="m-b-1" src={image} alt="" />}
      <strong className={`link-callout ${isActiveLink(link, activePath) ? 'text-info' : ''}`}>
        {titleTranslationKey && <Message>{titleTranslationKey}</Message>}
        {titleTranslatedText && <span>{titleTranslatedText}</span>}
      </strong>
      {descriptionTranslationKey && (
        <p className="m-t-1 m-b-0">
          <Message>{descriptionTranslationKey}</Message>
        </p>
      )}
      {badge && ' '}
      {badge && <Badge translationKey={badge} />}
    </a>
  </li>
);

DropdownItem.propTypes = {
  /* eslint-disable-next-line react/require-default-props */
  titleTranslationKey: requiredIf(Types.string, props => !props.titleTranslatedText),
  /* eslint-disable-next-line react/require-default-props */
  titleTranslatedText: requiredIf(Types.string, props => !props.titleTranslationKey),
  link: Types.string.isRequired,
  descriptionTranslationKey: Types.string,
  image: Types.string,
  badge: Types.string,
  activePath: Types.string,
  className: Types.string,
};

DropdownItem.defaultProps = {
  descriptionTranslationKey: undefined,
  image: undefined,
  badge: '',
  activePath: undefined,
  className: '',
};

export default DropdownItem;
