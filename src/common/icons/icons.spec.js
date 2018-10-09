import getIcon from '.';

jest.mock('./iconMap', () => ({
  send: 'Send icon component',
  receive: 'Receive icon component',
}));

describe('Getting icons', () => {
  it('returns component for icon with name', () => {
    expect(getIcon('send')).toBe('Send icon component');
    expect(getIcon('receive')).toBe('Receive icon component');
  });
});
