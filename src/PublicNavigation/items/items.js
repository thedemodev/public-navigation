import config from '../../../items/navigation.json';
import shouldShowItemForLocale from './l10n';
import { interpolateLinkForLocale } from '../../common/l10n';
import getIcon from '../../common/icons';

export function getItems(locale) {
  const items = config.items
    .filter(item => shouldShowItemForLocale(item, locale))
    .map(item => localizeItem(item, locale))
    .map(addIconToItemIfExists);

  return items;
}

export function getButtonItem(locale) {
  return localizeLinkInItem(config.buttonItem, locale);
}

function localizeItem(item, locale) {
  return item.items
    ? localizeItemWithSubitems(item, locale)
    : localizeItemWithoutSubitems(item, locale);
}

function localizeItemWithSubitems({ items, ...item }, locale) {
  const subitems = items
    .filter(subitem => shouldShowItemForLocale(subitem, locale))
    .map(subitem => localizeLinkInItem(subitem, locale));

  return { ...item, items: subitems };
}

function localizeItemWithoutSubitems(item, locale) {
  return localizeLinkInItem(item, locale);
}

function localizeLinkInItem(item, locale) {
  return item.link ? { ...item, link: interpolateLinkForLocale(item.link, locale) } : item;
}

function addIconToItemIfExists({ icon, ...item }) {
  return icon ? { ...item, Icon: getIcon(icon) } : item;
}
