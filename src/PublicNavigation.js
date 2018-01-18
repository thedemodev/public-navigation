import React from 'react';

const PublicNavigation = items => (
  <div>
    Passed:
    <pre>{JSON.stringify(items, 'utf-8', 2)}</pre>
  </div>
);

export default PublicNavigation;
