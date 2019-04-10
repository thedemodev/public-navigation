import React, { Fragment } from 'react';
import Types from 'prop-types';
import { Message } from 'retranslate';
import Badge from '../../../../common/Badge';

import './ItemContent.less';

const ItemContent = ({ translationKey, Icon, hasCaret, badge }) => (
  <Fragment>
    {Icon && <Icon className="tw-public-navigation-item-content__icon m-r-1" size="sm" />}
    {badge && (
      <span className="hidden-xs hidden-sm p-r-1">
        <Badge translationKey={badge} />
      </span>
    )}
    <span className="tw-public-navigation-item-content__text text-ellipsis">
      <Message>{translationKey}</Message>

      {badge && (
        <span className="visible-xs-inline-block visible-sm-inline-block p-l-1">
          <Badge translationKey={badge} />
        </span>
      )}
    </span>
    {hasCaret && <span className="caret visible-xl-inline-block" />}
  </Fragment>
);

ItemContent.propTypes = {
  translationKey: Types.string.isRequired,
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
