export default function focusWithin(element) {
  const className = 'focus-within';

  const focusableChildren = getFocusableChildren(element);

  document.addEventListener('focus', onFocusChange, true);

  function onFocusChange() {
    if (focusIsInElement()) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }

  function getFocusableChildren(elem) {
    const focusableQuery =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    return Array.prototype.slice.call(elem.querySelectorAll(focusableQuery));
  }

  function focusIsInElement() {
    return focusableChildren.some(child => document.activeElement === child);
  }
}
