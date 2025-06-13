import { configureStore } from '@reduxjs/toolkit';
import internshipReducer from './features/internships/internshipSlice';

export const store = configureStore({
  reducer: {
    internships: internshipReducer,
  },
});
