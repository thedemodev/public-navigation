import focusWithin from './';

describe('Focus within', () => {
  let element;
  beforeEach(() => {
    document.body.innerHTML = `
      <button>A button</button>
      <ul>
        <li>
          <a href="/link-1">A link</a>
        </li>
        <li>
          <a href="/link-2">Another link</a>
        </li>
      </ul>
      <textarea>Yet another link</textarea>
      <div tabindex="2"></div>
    `;
  });

  it('adds .focus-within class when focus gets inside element and removes it when focus gets out', () => {
    element = document.querySelector('ul');

    focusWithin(element);

    expect(hasFocusWithinClass()).toBe(false);
    focus('button');
    expect(hasFocusWithinClass()).toBe(false);

    focus('[href="/link-1"]');
    expect(hasFocusWithinClass()).toBe(true);
    focus('[href="/link-2"]');
    expect(hasFocusWithinClass()).toBe(true);

    focus('textarea');
    expect(hasFocusWithinClass()).toBe(false);
    focus('div');
    expect(hasFocusWithinClass()).toBe(false);
  });

  function focus(query) {
    document.querySelector(query).focus();
  }

  function hasFocusWithinClass() {
    return element.classList.contains('focus-within');
  }
});
