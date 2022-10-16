import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	characters: [],
	count: 0,
	fullLoaded: false,
};

export const totalEntries = createAsyncThunk(
	'characters/totalEntries',
	async () => {
		const totalCharacters = await axios.post(
			`http://localhost:3000/api/characters/all`,
		);
		return totalCharacters.data.characters.info.count;
	},
);

export const preLoadAllCharacters = createAsyncThunk(
	'characters/preLoadAllCharacters',
	async () => {
		getCharacters(1);
		console.log('se ejecuta pio???');
		let firstPage = 1;
		const allCharacters = [];
		while (firstPage < 43) {
			console.log(firstPage, 'numero');
			const response = await fetch(
				`http://localhost:3000/api/characters/all?page=${firstPage}`,
			);
			const data = await response.json();
			allCharacters.push(...data.results);
			firstPage++;
		}
		return allCharacters;
	},
);

export const getCharacters = createAsyncThunk(
	'characters/getCharacters',
	async (page) => {
		const response = await fetch(
			`http://localhost:3000/api/characters/all?page=${page}`,
		);
		const { characters } = await response.json();
		return characters;
	},
);

export const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
		setCharacters: (state, action) => {
			state.characters = action.payload;
		},
		setTotalEntries: (state, action) => {
			state.count = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(totalEntries.fulfilled, (state, action) => {
			state.count = action.payload;
		});
		builder.addCase(preLoadAllCharacters.fulfilled, (state, action) => {
			state.characters = action.payload;
			state.fullLoaded = true;
		});
		builder.addCase(getCharacters.fulfilled, (state, action) => {
			state.characters = action.payload;
		});
	},
});

export const { setCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;
