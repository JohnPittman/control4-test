import { STORE_ACCESS_KEY } from './constants';

const getInitialState = () => {
    return {};
};

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case STORE_ACCESS_KEY:
            return {
                ...state,
                accessKey: action.payload
            };
        default:
            return state;
    }
};
