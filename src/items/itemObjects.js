import SendIcon from '@transferwise/icons/react/send';
import ReceiveIcon from '@transferwise/icons/react/receive';
import CardIcon from '@transferwise/icons/react/active-card';
import BusinessIcon from '@transferwise/icons/react/briefcase';
import HelpIcon from '@transferwise/icons/react/help-circle';
import LoginIcon from '@transferwise/icons/react/login';

export const items = [
  {
    translationKey: 'send',
    Icon: SendIcon,
    items: [
      {
        translationKey: 'send',
        link: '/',
      },
      {
        translationKey: 'send.exchange-rate',
        link: '/#chart',
      },
      {
        translationKey: 'send.coverage',
        link: '/#b-transfer-map-light',
      },
      {
        translationKey: 'pricing',
        link: '/pricing',
      },
    ],
  },
  {
    translationKey: 'receive',
    Icon: ReceiveIcon,
    items: [
      {
        translationKey: 'get-borderless-account',
        link: '/{{localePath}}/borderless/',
      },
      {
        translationKey: 'bank-details',
        link: '/{{localePath}}/borderless/#get-paid',
      },
      {
        translationKey: 'how-it-works',
        link: '/{{localePath}}/borderless/#borderless-explainer-video',
      },
      {
        translationKey: 'pricing',
        link: '/{{localePath}}/borderless/pricing',
      },
    ],
    isBorderless: true,
  },
  {
    translationKey: 'card',
    Icon: CardIcon,
    items: [
      {
        translationKey: 'get-borderless-account',
        link: '/{{localePath}}/borderless/',
        badge: {
          translationKey: 'new',
        },
      },
      {
        translationKey: 'card.transferwise-mastercard',
        link: '/{{localePath}}/borderless/#card',
      },
      {
        translationKey: 'card.compare-transferwise-banks',
        link: '/{{localePath}}/borderless/#price-comp',
      },
      {
        translationKey: 'how-it-works',
        link: '/{{localePath}}/borderless/#borderless-explainer-video',
      },
      {
        translationKey: 'pricing',
        link: '/{{localePath}}/borderless/pricing',
      },
    ],
    isCard: true,
  },
  {
    translationKey: 'business',
    Icon: BusinessIcon,
    items: [
      {
        translationKey: 'business.overview',
        link: '/{{localePath}}/business/',
      },
      {
        translationKey: 'bank-details',
        link: '/{{localePath}}/business/borderless',
      },
      {
        translationKey: 'business.run-payroll-batch-payments',
        link: '/{{localePath}}/business/international-payroll-via-batch-payments',
      },
      {
        translationKey: 'business.get-paid-freelancer',
        link: '/{{localePath}}/freelancer/',
      },
      {
        translationKey: 'business.explore-payouts-api',
        link: '/payouts/',
      },
      {
        translationKey: 'pricing',
        link: '/pricing',
      },
    ],
  },
  {
    translationKey: 'help',
    Icon: HelpIcon,
    items: [
      {
        translationKey: 'help',
        link: '/help',
      },
      {
        translationKey: 'pricing',
        link: '/pricing',
      },
      {
        translationKey: 'help.mid-market-rate',
        link: '/{{localePath}}/mid-market-rate',
      },
      {
        translationKey: 'help.our-story',
        link: '/about/our-story',
      },
    ],
  },
  {
    translationKey: 'login',
    link: '/login',
    Icon: LoginIcon,
  },
];

export const buttonItem = {
  translationKey: 'signup',
  link: '/register',
};

export const SUPPORTED_BORDERLESS_LOCALES = [
  'fr',
  'es',
  'it',
  'sg',
  'de',
  'hu',
  'ca',
  'us',
  'gb',
  'au',
  'no',
  'gr',
  'ie',
  'pt',
  'nl',
  'ro',
  'pl',
];

export const SUPPORTED_CARD_LOCALES = ['fr', 'es', 'it', 'sg', 'de', 'hu', 'gb', 'au'];
