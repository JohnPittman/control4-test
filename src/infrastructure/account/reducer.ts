import { FETCH_ACCOUNT } from './constants';

const getInitialState = () => {
    return {
        balance: 0
    };
};

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case FETCH_ACCOUNT:
            return {
                ...state,
                balance: action.payload
            };
        default:
            return state;
    }
};
