import config from '../../../items/footer.json';
import { interpolateLinkForLocale } from '../../common/l10n';
import getIcon from '../../common/icons';

export default function getItems(locale) {
  return {
    top: config.top.map(section => createSectionWithItems(section, locale)),
    bottom: config.bottom.map(item => createItem(item, locale)),
    small: config.small.map(item => createItem(item, locale)),
  };
}

function createSectionWithItems({ items, ...section }, locale) {
  return {
    ...section,
    items: items.map(item => createItem(item, locale)),
  };
}

function createItem(item, locale) {
  if (item.icons) {
    return createItemWithIcons(item);
  }
  if (item.localized) {
    const localizedItem = localizeItem(item, locale);
    return createItem(localizedItem, locale);
  }
  return localizeLinkInItem(item, locale);
}

function localizeLinkInItem(item, locale) {
  return item.link ? { ...item, link: interpolateLinkForLocale(item.link, locale) } : item;
}

function localizeItem({ options }, locale) {
  return options[locale.toLowerCase()] || options.default;
}

function createItemWithIcons(item) {
  return {
    ...item,
    icons: item.icons.map(({ icon, ...otherProperties }) => ({
      ...otherProperties,
      Icon: getIcon(icon),
    })),
  };
}
