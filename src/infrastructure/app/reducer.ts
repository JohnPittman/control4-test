function getDefaultState() {
    return {
        weatherAPIAccessKey: 'da65fafb6cb9242168b7724fb5ab75e7'
    };
}

export default function appReducer(state = getDefaultState(), action) {
    switch (action.type) {
        default:
            return state;
    }
}
