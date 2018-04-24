import {
  items,
  buttonItem,
  SUPPORTED_BORDERLESS_LOCALES,
  SUPPORTED_CARD_LOCALES,
} from './itemObjects';
import { interpolateLinkForLocale, translate } from '../i18n';

export function getItemsInLanguage(language) {
  return items
    .filter(
      item =>
        (!isBorderless(item) && !isCard(item)) ||
        isSupportedLocaleForBorderless(item, language) ||
        isSupportedLocaleForCard(item, language),
    )
    .map(item => {
      const translatedItem = translateItem(item, language);

      if (item.items) {
        return {
          ...translatedItem,
          items: item.items.map(subItem => {
            if (subItem.link) {
              if (subItem.badge) {
                return translateItemWithLinkAndBadge(subItem, language);
              }

              return translateItemWithLink(subItem, language);
            }

            if (subItem.badge) {
              return translateItemWithBadge(subItem, language);
            }

            return translateItem(subItem, language);
          }),
        };
      }

      if (item.link) {
        return translateItemWithLink(item, language);
      }

      return translatedItem;
    });
}

export function isBorderless(item) {
  return item.isBorderless;
}

export function isCard(item) {
  return item.isCard;
}

export function isSupportedLocaleForBorderless(item, language) {
  return isBorderless(item) && SUPPORTED_BORDERLESS_LOCALES.indexOf(language) >= 0;
}

export function isSupportedLocaleForCard(item, language) {
  return isCard(item) && SUPPORTED_CARD_LOCALES.indexOf(language) >= 0;
}

export function getButtonItemInLanguage(language) {
  if (buttonItem.link) {
    return translateItemWithLink(buttonItem, language);
  }

  return translateItem(buttonItem, language);
}

function translateItem({ translationKey, ...item }, language) {
  return {
    text: translate(translationKey, language),
    ...item,
  };
}

function translateItemWithLink({ translationKey, link, ...item }, language) {
  return {
    link: interpolateLinkForLocale(link, language),
    text: translate(translationKey, language),
    ...item,
  };
}

function translateItemWithBadge({ translationKey, badge, ...item }, language) {
  return {
    badge: translate(badge.translationKey, language),
    text: translate(translationKey, language),
    ...item,
  };
}

function translateItemWithLinkAndBadge({ translationKey, link, badge, ...item }, language) {
  return {
    link: interpolateLinkForLocale(link, language),
    badge: translate(badge.translationKey, language),
    text: translate(translationKey, language),
    ...item,
  };
}
