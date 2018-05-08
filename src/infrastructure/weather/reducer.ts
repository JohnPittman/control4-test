function getDefaultState() {
    return [];
}

export default function weatherReducer(state = getDefaultState(), action) {
    switch (action.type) {
        case 'ADD_WEATHER_SUCCESS':
            return [action.payload].concat(state);
        case 'LOAD_WEATHER_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}
