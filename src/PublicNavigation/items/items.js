import config from '../../../items/navigation.json';
import shouldShowItemForLocale from './l10n';
import { interpolateLinkForLocaleAndLanguage } from '../../common/l10n';
import getIcon from '../../common/icons';

export function getItems(
  locale,
  isUserLoggedIn = false,
  hasUserPreviouslyLoggedIn = false,
  hiddenItemIdList = [],
  language,
) {
  const items = config.items
    .filter(item => shouldShowItem(item, hiddenItemIdList))
    .filter(item => shouldShowItemForLocale(item, locale))
    .filter(item => shouldShowItemForUser(item, isUserLoggedIn))
    .filter(item => shouldShowItemForPreviouslyLoggedUser(item, hasUserPreviouslyLoggedIn))
    .map(item => filterHiddenSubItems(item, hiddenItemIdList))
    .map(item => localizeItem(item, locale, language))
    .map(addIconToItemIfExists);
  return items;
}

export function getButtonItems(
  locale,
  isUserLoggedIn,
  hasUserPreviouslyLoggedIn = false,
  language,
) {
  const buttonItems = config.buttonItems
    .filter(item => shouldShowItemForUser(item, isUserLoggedIn))
    .filter(item => shouldShowItemForPreviouslyLoggedUser(item, hasUserPreviouslyLoggedIn))
    .map(item => localizeLinkInItem(item, locale, language));
  return buttonItems;
}

function localizeItem(item, locale, language) {
  return item.items
    ? localizeItemWithSubitems(item, locale, language)
    : localizeItemWithoutSubitems(item, locale, language);
}

function localizeItemWithSubitems({ items, main, ...item }, locale, language) {
  const subitems = items
    .filter(subitem => shouldShowItemForLocale(subitem, locale))
    .map(subitem => localizeLinkInItem(subitem, locale, language));

  const localizedMainItem = main ? localizeItemWithoutSubitems(main, locale, language) : undefined;
  const localizedParentItem = localizeItemWithoutSubitems(item, locale, language);

  return { ...localizedParentItem, items: subitems, main: localizedMainItem };
}

function localizeItemWithoutSubitems(item, locale, language) {
  return localizeLinkInItem(item, locale, language);
}

function localizeLinkInItem(item, locale, language) {
  return item.link
    ? { ...item, link: interpolateLinkForLocaleAndLanguage(item.link, locale, language) }
    : item;
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
  if (item.hidden === true && revealItemsList.indexOf(item.id) !== -1) {
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
