import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import WeatherDetailsContainer from '~/components/weather-details/container';
import WeatherList from '~/components/weather-list/component';

import { Cities } from '~/infrastructure/cities/reducer';

import './style.css';

export interface WeatherProps {
    cities: Cities;
    weather: {};
    loadCitiesWeather: (cityNames: string[]) => void;
}

export default class Weather extends React.PureComponent {
    props: WeatherProps | RouteProps;

    componentDidMount() {
        this.props.loadCitiesWeather(
            this.props.cities.map((city) => {
                return city.name;
            })
        );
    }

    render() {
        return (
            <div className="weather">
                <WeatherList items={this.props.weather} selectedId={1} />
                <Route
                    exact
                    path="/weather/:weatherDetailsIndex"
                    component={WeatherDetailsContainer}
                />
            </div>
        );
    }
}
