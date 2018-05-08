import * as React from 'react';

import RightSideBar from '~/components-common/right-side-bar/component';

import './style.css';

export interface WeatherDetailsProps {
    weatherDetails: { [key: string]: any };
}

class WeatherDetails extends React.PureComponent {
    props: WeatherDetailsProps;

    render() {
        return this.props.weatherDetails !== undefined ? (
            <RightSideBar closeRouteTo="/weather">
                <div className="weather-details">
                    <div className="weather-details-header">
                        <span>
                            icon:
                            <img
                                src={`http://openweathermap.org/img/w/${
                                    this.props.weatherDetails.weather[0].icon
                                }.png`}
                            />
                        </span>
                        <span>iconType: {this.props.weatherDetails.weather[0].main}</span>
                    </div>
                    <span>name: {this.props.weatherDetails.name}</span>
                    <span>
                        visibility:{' '}
                        {(this.props.weatherDetails.visibility * 3.28084 / 5280).toPrecision(2)} MI
                    </span>
                    <span>wind speed: {this.props.weatherDetails.wind.speed} mph</span>
                    <span>
                        icon:
                        <img
                            src={`http://openweathermap.org/img/w/${
                                this.props.weatherDetails.weather[0].icon
                            }.png`}
                        />
                    </span>
                    <span>iconType: {this.props.weatherDetails.weather[0].main}</span>
                    <span>humidity: {this.props.weatherDetails.main.humidity}</span>
                    <span>pressure: {this.props.weatherDetails.main.pressure}</span>
                    <span>temp: {this.props.weatherDetails.main.temp}</span>
                    <span>
                        hi/low: {this.props.weatherDetails.main.temp_max}/{
                            this.props.weatherDetails.main.temp_min
                        }
                    </span>
                    <span>rain chance: N/A (API broken)</span>
                </div>
            </RightSideBar>
        ) : null;
    }
}

export default WeatherDetails;
