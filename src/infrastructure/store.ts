import { combineReducers, createStore } from 'redux';

import accountReducer from '~/infrastructure/account/reducer';
import appReducer from '~/infrastructure/app/reducer';

export default createStore(
    combineReducers({
        app: appReducer,
        account: accountReducer
    })
);
