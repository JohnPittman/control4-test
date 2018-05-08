export interface City {
    name: string;
    state: string;
}

export declare type Cities = City[];

function getDefaultState(): Cities {
    return [
        {
            name: 'San Francisco',
            state: 'CA'
        },
        {
            name: 'New York',
            state: 'NY'
        },
        {
            name: 'Salt Lake City',
            state: 'UT'
        }
    ];
}

export default (state = getDefaultState(), action) => {
    switch (action.type) {
        default:
            return state;
    }
};
