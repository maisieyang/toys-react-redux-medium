import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  article: undefined,
  inProgress: false,
  errors: undefined,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    articlePageUnloaded: () => initialState,
  },
});

export const articleReducer = articleSlice.reducer