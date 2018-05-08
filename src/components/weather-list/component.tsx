import * as React from 'react';
import { Link } from 'react-router-dom';

import WeatherListItem from '~/components/weather-list-item/component';

import MinusIcon from '~/images/icons/minus/component';
import PlusIcon from '~/images/icons/plus/component';

import './style.css';

export interface WeatherListProps {
    items: [{ [key: string]: any }];
    selectedId: number;
}

export default class WeatherList extends React.PureComponent {
    props: WeatherListProps;

    render() {
        return (
            <div className="weather-list-wrapper">
                <div className="weather-list-header">
                    <Link className="weather-list-header-btn" to={`/weather/remove`}>
                        <MinusIcon />
                    </Link>
                    <Link className="weather-list-header-btn" to={`/weather/add`}>
                        <PlusIcon />
                    </Link>
                </div>
                <div className="weather-list">
                    {this.props.items.map((item, index) => {
                        return (
                            <WeatherListItem
                                key={item.id}
                                id={index}
                                cityName={item.name}
                                temp={item.main.temp}
                                iconId={item.weather[0].icon}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
