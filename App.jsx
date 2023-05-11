import React from 'react';
import {AppTheme, ApolloProvider, Auth} from '@context';
import {SafelyQ} from '@navigations';

export const App = () => {
  return (
    <AppTheme>
      <ApolloProvider>
        <Auth>
          <SafelyQ />
        </Auth>
      </ApolloProvider>
    </AppTheme>
  );
};
