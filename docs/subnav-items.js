module.exports = [
  {
    link: '#iban',
    translatedText: 'IBAN',
    isTitle: true,
  },
  {
    link: '#checker',
    translatedText: 'Check an IBAN',
  },
  {
    isCard: true,
    translationKey: 'public-navigation.borderless-account',
    analyticsId: 'receive',
    badge: 'public-navigation.new',
    link: '/gb/borderless',
    items: [
      {
        translationKey: 'public-navigation.borderless-account.pricing',
        link: '/gb/borderless/pricing',
      },
      {
        translationKey: 'public-navigation.borderless-account.about',
        link: '/gb/borderless#borderless-explainer-video',
      },
    ],
    main: {
      image: 'https://daw291njkc3ao.cloudfront.net/conversion/navigation/borderless.svg',
      titleTranslationKey: 'public-navigation.borderless-account',
      descriptionTranslationKey: 'public-navigation.borderless-account.card.description',
      link: '/gb/borderless',
    },
  },
  {
    link: '#calculator',
    translatedText: 'Calculate an IBAN',
  },
  {
    link: '#search',
    translatedText: 'Search by Country',
  },
  {
    link: '#swift/bic',
    translatedText: 'Find a SWIFT/BIC code',
  },
];
