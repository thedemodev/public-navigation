import { items, buttonItem } from './itemObjects';
import { translate } from '../i18n';

export function getItemsInLanguage(language) {
  return items.map(item => {
    const translatedItem = translateItem(item, language);

    if (item.items) {
      return {
        items: item.items.map(subItem => translateItem(subItem, language)),
        ...translatedItem,
      };
    }
    return translatedItem;
  });
}

export function getButtonItemInLanguage(language) {
  return translateItem(buttonItem, language);
}

function translateItem({ translationKey, link }, language) {
  return {
    text: translate(translationKey, language),
    link,
  };
}
