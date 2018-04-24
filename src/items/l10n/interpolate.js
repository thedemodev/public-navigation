export default function interpolateLinkForLocale(link, locale) {
  return link.replace('{{localePath}}', locale);
}
