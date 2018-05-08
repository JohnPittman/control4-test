import * as React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export interface WeatherListItemProps {
    children?: any;
    id: number;
    cityName: string;
    iconId: string;
    key?: any;
    temp: number;
}

export default class WeatherListItem extends React.PureComponent {
    props: WeatherListItemProps;

    render() {
        return (
            <Link className="weather-list-item" to={`/weather/${this.props.id}`}>
                <img src={`http://openweathermap.org/img/w/${this.props.iconId}.png`} />
                <div className="weather-list-item-info">
                    {this.props.cityName}
                    <div className="weather-list-item-info-temp">
                        <span>{Math.round(this.props.temp)}°</span>
                        <span className="weather-list-item-info-temp-degree">F</span>
                    </div>
                </div>
            </Link>
        );
    }
}
