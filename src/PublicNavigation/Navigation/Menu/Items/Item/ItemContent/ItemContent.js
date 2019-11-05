import React, { Fragment } from 'react';
import Types from 'prop-types';
import requiredIf from 'react-required-if';
import { Message } from 'retranslate';
import Badge from '../../../../common/Badge';

import './ItemContent.less';

const ItemContent = ({ translationKey, Icon, hasCaret, badge, translatedText }) => (
  <Fragment>
    {Icon && <Icon className="tw-public-navigation-item-content__icon" size="sm" />}
    {badge && <Badge translationKey={badge} className="hidden-xs hidden-sm m-r-1" />}
    <span className="tw-public-navigation-item-content__text text-ellipsis">
      {translationKey && <Message>{translationKey}</Message>}
      {translatedText && <span>{translatedText}</span>}
      {badge && (
        <Badge
          translationKey={badge}
          className="visible-xs-inline-block visible-sm-inline-block m-l-1"
        />
      )}
    </span>
    {hasCaret && <span className="caret visible-xl-inline-block" />}
  </Fragment>
);

ItemContent.propTypes = {
  /* eslint-disable-next-line react/require-default-props */
  translationKey: requiredIf(Types.string, props => !props.translatedText),
  /* eslint-disable-next-line react/require-default-props */
  translatedText: requiredIf(Types.string, props => !props.translationKey),
  Icon: Types.func,
  hasCaret: Types.bool,
  badge: Types.string,
};

ItemContent.defaultProps = {
  hasCaret: false,
  badge: '',
  Icon: null,
};

export default ItemContent;
