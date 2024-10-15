import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const section_Slice = createSlice({
  name: 'section', // Le nom du slice est 'section'
  initialState: '/',

  reducers: {
    updateSection: (state, action: PayloadAction<{ updated: string }>) => {
      const { updated } = action.payload;
      return updated; // Retourner la nouvelle section (car le state est une chaîne)
    },
  },
});

// Ici, on corrige le type d'action pour qu'il corresponde à l'action générée par le slice
export const updateSection__Hilfe = (updated: string) => {
  return {
    type: 'section/updateSection', // Correspondre au type généré par createSlice
    payload: {
      updated,
    },
  };
};

export default section_Slice.reducer;
