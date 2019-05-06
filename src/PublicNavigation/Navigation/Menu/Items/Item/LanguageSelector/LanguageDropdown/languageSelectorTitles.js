import titleStringMap from './titleStringMap';

export default function getTitleStringForLanguage(language) {
  return titleStringMap[language] || titleStringMap.en;
}
