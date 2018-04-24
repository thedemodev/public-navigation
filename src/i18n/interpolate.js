export default function interpolateLinkForLocale(link, language) {
  const localeLanguage = language.split('-')[0];
  const localePath = localeLanguage === 'en' ? 'gb' : localeLanguage;

  return link.replace('{{localePath}}', localePath);
}
