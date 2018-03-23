import translations from 'translations'; // eslint-disable-line

export default function translate(key, language) {
  if (translations[language] && translations[language][key]) {
    return translations[language][key];
  }

  return key;
}
