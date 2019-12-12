/**
 * @jest-environment node
 */

import React from 'react';
import { renderToString } from 'react-dom/server';

import Footer from '.';

jest.mock('./items', () => jest.fn(() => ({ top: [], bottom: [{ link: '#' }], small: [] })));
jest.mock('../common/i18n', () => ({ LANGUAGES: ['en'], messages: {} }));

describe('Footer', () => {
  it('server side renders', () => {
    expect(() => {
      renderToString(<Footer />);
    }).not.toThrow();
  });
});
