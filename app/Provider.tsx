// app/Provider.tsx
'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './assets/redux/redux';

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
