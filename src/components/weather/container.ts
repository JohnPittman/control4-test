import { connect } from 'react-redux';

import Weather from './component';

import { loadWeather } from '~/infrastructure/weather/actions';

function mapStateToProps(state) {
    return {
        cities: state.cities,
        weather: state.weather
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadCitiesWeather: (cityNames) => {
            dispatch(loadWeather(cityNames));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
