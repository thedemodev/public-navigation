import config from '../../../items/navigation.json';
import shouldShowItemForLocale from './l10n';
import { interpolateLinkForLocale } from '../../common/l10n';
import getIcon from '../../common/icons';

export function getItems(
  locale,
  isUserLoggedIn = false,
  hasUserPreviouslyLoggedIn = false,
  hiddenItemIdList = [],
) {
  const items = config.items
    .filter(item => shouldShowItem(item, hiddenItemIdList))
    .filter(item => shouldShowItemForLocale(item, locale))
    .filter(item => shouldShowItemForUser(item, isUserLoggedIn))
    .filter(item => shouldShowItemForPreviouslyLoggedUser(item, hasUserPreviouslyLoggedIn))
    .map(item => filterHiddenSubItems(item, hiddenItemIdList))
    .map(item => localizeItem(item, locale))
    .map(addIconToItemIfExists);
  return items;
}

export function getButtonItems(locale, isUserLoggedIn, hasUserPreviouslyLoggedIn = false) {
  const buttonItems = config.buttonItems
    .filter(item => shouldShowItemForUser(item, isUserLoggedIn))
    .filter(item => shouldShowItemForPreviouslyLoggedUser(item, hasUserPreviouslyLoggedIn))
    .map(item => localizeLinkInItem(item, locale));
  return buttonItems;
}

function localizeItem(item, locale) {
  return item.items
    ? localizeItemWithSubitems(item, locale)
    : localizeItemWithoutSubitems(item, locale);
}

function localizeItemWithSubitems({ items, main, ...item }, locale) {
  const subitems = items
    .filter(subitem => shouldShowItemForLocale(subitem, locale))
    .map(subitem => localizeLinkInItem(subitem, locale));

  const localizedMainItem = main ? localizeItemWithoutSubitems(main, locale) : undefined;
  const localizedParentItem = localizeItemWithoutSubitems(item, locale);

  return { ...localizedParentItem, items: subitems, main: localizedMainItem };
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

function shouldShowItemForUser(item, isUserLoggedIn) {
  const noUserLogic = !item.showForLoggedInUser && !item.hideForLoggedInUser;
  if (
    noUserLogic ||
    (isUserLoggedIn && item.showForLoggedInUser) ||
    (!isUserLoggedIn && item.hideForLoggedInUser)
  ) {
    return true;
  }
  return false;
}

function shouldShowItemForPreviouslyLoggedUser(item, hasUserPreviouslyLoggedIn) {
  if (Object.prototype.hasOwnProperty.call(item, 'showForPreviouslyLoggedInUser')) {
    return hasUserPreviouslyLoggedIn === item.showForPreviouslyLoggedInUser;
  }
  return true;
}

function shouldShowItem(item, revealItemsList) {
  if (!item.id || (item.id && !item.hidden)) {
    return true;
  }
  if (item.hidden === true && revealItemsList.includes(item.id)) {
    return true;
  }
  return false;
}

function filterHiddenSubItems(item, revealItemsList) {
  const filteredItem = Object.assign({}, item);
  if (filteredItem.items) {
    filteredItem.items = filteredItem.items.filter(subItem =>
      shouldShowItem(subItem, revealItemsList),
    );
  }
  return filteredItem;
}
