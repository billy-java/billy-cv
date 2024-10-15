import { configureStore } from '@reduxjs/toolkit';
import section_Slice from './section_Slice';

export const store = configureStore({
  reducer: {
    section: section_Slice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
