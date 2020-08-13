import { combineReducers } from '@reduxjs/toolkit';
import localization from './feature/localization'

const reducers = {
    localization,
};

export default combineReducers(reducers);
