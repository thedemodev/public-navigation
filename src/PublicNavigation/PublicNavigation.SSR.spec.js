/**
 * @jest-environment node
 */

import React from 'react';
import { renderToString } from 'react-dom/server';

import PublicNavigation from './PublicNavigation';

jest.mock('./items', () => ({ getItems: jest.fn(), getButtonItems: jest.fn() }));
jest.mock('../common/i18n', () => ({
  messages: {},
  LANGUAGES: [],
}));

describe('PublicNavigation', () => {
  it('server side renders', () => {
    expect(() => {
      renderToString(<PublicNavigation language="de" />);
    }).not.toThrow();
  });
});
