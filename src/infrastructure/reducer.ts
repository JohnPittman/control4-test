import { combineReducers } from 'redux';

import accountReducer from '~/infrastructure/account/reducer';
import appReducer from '~/infrastructure/app/reducer';

export default combineReducers({
    app: appReducer,
    account: accountReducer
});
