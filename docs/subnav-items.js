module.exports = {
  simple: [
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
  ],
  complex: [
    {
      link: '/blog',
      translatedText: 'Blog',
      isTitle: true,
    },
    {
      link: '#news',
      translatedText: 'TransferWise News',
      main: {
        titleTranslatedText: 'Transferwise News',
        link: '#',
      },
      items: [
        {
          translatedText: 'Comparison',
          link: '#',
        },
        {
          translatedText: 'Corporate',
          link: '#',
        },
        {
          translatedText: 'Product Update',
          link: '#',
        },
        {
          translatedText: 'Team Update',
          link: '#',
        },
      ],
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
      isBusinessCard: true,
      translationKey: 'public-navigation.business',
      link: '/gb/business',
      items: [
        {
          translationKey: 'public-navigation.business.pricing',
          link: '/gb/business/pricing-and-coverage',
        },
        {
          translationKey: 'public-navigation.business.freelancers',
          link: '/gb/business/freelancer',
        },
        {
          translationKey: 'public-navigation.business.ecommerce',
          link: '/gb/business/ecommerce',
        },
        {
          translationKey: 'public-navigation.business.enterprise',
          link: '/gb/business/payouts',
        },
      ],
      main: {
        image: 'https://daw291njkc3ao.cloudfront.net/conversion/navigation/business.svg',
        titleTranslationKey: 'public-navigation.business.tw-for-business',
        descriptionTranslationKey: 'public-navigation.business.tw-for-business.card.description',
        link: '/gb/business',
      },
    },
    {
      translationKey: 'public-navigation.help',
      link: '/help',
    },
  ],
};
