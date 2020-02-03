/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import loadable from '../../utils/Loadable';
import LoadingIndicator from '../../components/LoadingIndicator';

export default loadable(() => import('./HomeBody'), {
  fallback: <LoadingIndicator />,
});
