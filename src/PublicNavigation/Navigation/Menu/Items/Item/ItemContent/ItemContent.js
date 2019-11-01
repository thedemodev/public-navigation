import React, { Fragment } from 'react';
import Types from 'prop-types';
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
  translationKey: Types.string,
  Icon: Types.func,
  hasCaret: Types.bool,
  badge: Types.string,
  // Conditional propType via https://stackoverflow.com/a/47389109
  translatedText(props, propName, componentName) {
    const { translationKey, translatedText } = props;
    if (!translationKey && !translatedText) {
      return new Error(
        `${propName} is required when no translationKey is provided in ${componentName}.`,
      );
    }
    return null;
  },
};

ItemContent.defaultProps = {
  translationKey: '',
  hasCaret: false,
  badge: '',
  Icon: null,
  translatedText: '',
};

export default ItemContent;
