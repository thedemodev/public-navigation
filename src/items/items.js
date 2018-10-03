import { items, buttonItem } from './itemObjects';
import { translate } from '../i18n';
import { shouldShowItemForLocale, interpolateLinkForLocale } from './l10n';

export function getItems(language, locale) {
  return items.filter(item => shouldShowItemForLocale(item, locale)).map(item => {
    const translatedItem = translateItem(item, language);

    if (item.items) {
      return {
        ...translatedItem,
        items: item.items
          .filter(subItem => shouldShowItemForLocale(subItem, locale))
          .map(subItem => {
            if (subItem.link) {
              if (subItem.badge) {
                return translateItemWithLinkAndBadge(subItem, language, locale);
              }

              return translateItemWithLink(subItem, language, locale);
            }

            if (subItem.badge) {
              return translateItemWithBadge(subItem, language, locale);
            }

            return translateItem(subItem, language);
          }),
      };
    }

    if (item.link) {
      return translateItemWithLink(item, language, locale);
    }

    return translatedItem;
  });
}

export function getButtonItem(language, locale) {
  if (buttonItem.link) {
    return translateItemWithLink(buttonItem, language, locale);
  }

  return translateItem(buttonItem, language);
}

function translateItem({ translationKey, ...item }, language) {
  return {
    text: translate(translationKey, language),
    ...item,
  };
}

function translateItemWithLink({ translationKey, link, ...item }, language, locale) {
  return {
    link: interpolateLinkForLocale(link, locale),
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

function translateItemWithLinkAndBadge({ translationKey, link, badge, ...item }, language, locale) {
  return {
    link: interpolateLinkForLocale(link, locale),
    badge: translate(badge.translationKey, language),
    text: translate(translationKey, language),
    ...item,
  };
}
