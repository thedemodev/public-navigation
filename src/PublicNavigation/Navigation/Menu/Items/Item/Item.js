/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { Component, Fragment } from 'react';
import Types from 'prop-types';
import focusWithin from 'focus-within';
import classnames from 'classnames';

import ItemContent from './ItemContent';
import CardDropdown from './CardDropdown';
import LanguageSelector from './LanguageSelector';
import ButtonItem from '../../../ButtonItem';
import isActiveLink from '../../../../../common/utils/isActiveLink';

polyfillFocusWithinIfInBrowser();

class Item extends Component {
  static propTypes = {
    translationKey: Types.string,
    Icon: Types.func,
    link: Types.string,
    items: Types.arrayOf(Types.shape()),
    analyticsId: Types.string,
    badge: Types.string,
    main: Types.shape({}),
    isButton: Types.bool,
    isTitle: Types.bool,
    inverse: Types.bool,
    deEmphasize: Types.bool,
    isLanguageSelector: Types.bool,
    language: Types.string.isRequired,
    availableLanguages: Types.arrayOf(Types.shape({})),
    onLanguageChange: Types.func,
    activePath: Types.string,
    translatedText: Types.string,
    isInSubMenu: Types.bool,
  };

  static defaultProps = {
    translationKey: '',
    link: null,
    items: null,
    analyticsId: null,
    badge: '',
    main: null,
    Icon: null,
    isButton: false,
    isTitle: false,
    inverse: false,
    deEmphasize: false,
    isLanguageSelector: false,
    availableLanguages: undefined,
    onLanguageChange: undefined,
    activePath: undefined,
    translatedText: '',
    isInSubMenu: false,
  };

  handleMouseDown = event => {
    const { target } = event;
    const link = target.tagName.toLowerCase() === 'span' ? target.parentElement : target;

    if (link.tagName.toLowerCase() === 'a') {
      event.stopPropagation();
      link.click();
    } else {
      defer(() => link.blur());
    }
  };

  render() {
    const {
      translationKey,
      translatedText,
      link,
      Icon,
      items,
      analyticsId,
      badge,
      main,
      isButton,
      isTitle,
      inverse,
      deEmphasize,
      isLanguageSelector,
      language,
      availableLanguages,
      onLanguageChange,
      activePath,
      isInSubMenu,
    } = this.props;

    if (isLanguageSelector) {
      if (availableLanguages && availableLanguages.length > 1 && onLanguageChange) {
        return (
          <LanguageSelector
            language={language}
            availableLanguages={availableLanguages}
            onLanguageChange={onLanguageChange}
          />
        );
      }
      return null;
    }

    if (isButton) {
      return (
        <ButtonItem
          translationKey={translationKey}
          link={link}
          inverse={inverse}
          deEmphasize={deEmphasize}
        />
      );
    }

    const hasItems = !!(items && items.length > 0);

    const linkClassName = classnames(
      {
        'visible-xs visible-sm': hasItems,
        'navbar-title-link': isTitle,
      },
      'link-callout',
    );

    const itemContent = (
      <ItemContent
        translationKey={translationKey}
        Icon={Icon}
        hasCaret={hasItems}
        badge={badge}
        translatedText={translatedText}
      />
    );

    return (
      <li
        onMouseDown={this.handleMouseDown}
        className={classnames({
          dropdown: hasItems,
          active: isInSubMenu && isActiveLink(link, activePath),
        })}
        tabIndex="-1"
        data-analytics-id={analyticsId}
      >
        <Fragment>
          <a href={link} className={linkClassName}>
            {itemContent}
          </a>
          {hasItems && (
            <button className="dropdown-toggle hidden-xs hidden-sm" type="button">
              {itemContent}
            </button>
          )}
        </Fragment>

        {hasItems && <CardDropdown items={items} mainCTA={main} activePath={activePath} />}
      </li>
    );
  }
}

function polyfillFocusWithinIfInBrowser() {
  if (typeof document !== 'undefined') {
    focusWithin(document, {
      attr: false,
      className: 'focus-within',
    });
  }
}

function defer(fn) {
  setTimeout(fn, 0);
}

export default Item;
