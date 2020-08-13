import { createSlice } from '@reduxjs/toolkit';
import locales from '../../../locales'

const defaultLanguage = 'en';

const initialState = {
    language: defaultLanguage,
    locales: locales[defaultLanguage],
}

const localizationSlice = createSlice({
    name: 'LOCALIZATION',
    initialState,
    reducers: {
        setLanguage: (state, action) => ({
            ...state,
            language: action.payload,
            locales: locales[action.payload]
        }),
    }
})

export const { setLanguage } = localizationSlice.actions;
export default localizationSlice.reducer;
