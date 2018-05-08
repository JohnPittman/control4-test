import { connect } from 'react-redux';

import WeatherDetails from './component';

function mapStateToProps(state, ownProps) {
    return {
        weatherDetails: state.weather[ownProps.match.params.weatherDetailsIndex] // Hack to avoid calling weather api for same data.
    };
}

export default connect(mapStateToProps)(WeatherDetails);
