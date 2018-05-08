import { combineReducers } from 'redux';

import appReducer from '~/infrastructure/app/reducer';
import citiesReducer from '~/infrastructure/cities/reducer';
import weatherReducer from '~/infrastructure/weather/reducer';

export default combineReducers({
    app: appReducer,
    cities: citiesReducer,
    weather: weatherReducer
});
