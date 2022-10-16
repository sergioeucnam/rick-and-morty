import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import charactersSlice from '../slices/charactersSlice';

export const store = configureStore({
	reducer: {
		characters: charactersSlice,
	},
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore, { debug: true });
