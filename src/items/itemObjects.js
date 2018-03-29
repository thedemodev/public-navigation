import PeopleIcon from '@transferwise/icons/react/recipients';
import BusinessIcon from '@transferwise/icons/react/briefcase';
import HelpIcon from '@transferwise/icons/react/help-circle';
import LoginIcon from '@transferwise/icons/react/login';

export const items = [
  {
    translationKey: 'personal',
    link: 'https://transferwise.com',
    Icon: PeopleIcon,
    // items: [
    //   {
    //     translationKey: 'personal.send-money',
    //     link: 'https://transferwise.com',
    //   },
    //   {
    //     translationKey: 'personal.borderless',
    //     link: 'https://transferwise.com/borderless',
    //   },
    //   {
    //     translationKey: 'personal.pricing',
    //     link: 'https://transferwise.com/pricing',
    //   },
    //   {
    //     translationKey: 'personal.story',
    //     link: 'https://transferwise.com/our-story',
    //   },
    // ],
  },
  {
    translationKey: 'business',
    link: 'https://transferwise.com/business',
    Icon: BusinessIcon,
    // items: [
    //   {
    //     translationKey: 'business.send-money',
    //     link: 'https://transferwise.com/business',
    //   },
    //   {
    //     translationKey: 'business.borderless',
    //     link: 'https://transferwise.com/business/borderless',
    //   },
    //   {
    //     translationKey: 'business.pricing',
    //     link: 'https://transferwise.com/pricing',
    //   },
    // ],
  },
  {
    translationKey: 'help',
    link: 'https://transferwise.com/help',
    Icon: HelpIcon,
  },
  {
    translationKey: 'login',
    link: 'https://transferwise.com/login',
    Icon: LoginIcon,
  },
];

export const buttonItem = {
  translationKey: 'signup',
  link: 'https://transferwise.com/register',
};
