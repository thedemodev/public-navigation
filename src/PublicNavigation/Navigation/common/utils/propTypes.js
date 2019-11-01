import Types from 'prop-types';

export const conditionalPropTypes = (prop1, prop2) => {
  return {
    propTypes: {
      [prop1]: Types.string,
      // Conditional propType via https://stackoverflow.com/a/47389109
      [prop2](props, propName, componentName) {
        const { translationKey, translatedText } = props;
        if (!translationKey && !translatedText) {
          return new Error(
            `${propName} is required when no ${prop1} is provided in ${componentName}.`,
          );
        }
        return null;
      },
    },
    defaultProps: {
      [prop1]: '',
      [prop2]: '',
    },
  };
};
