import * as React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Store } from 'redux';

import WeatherContainer from '~/components/weather/container';

import './style.css';

export interface AppProps {
    store: Store<any>;
}

export default function App(props: AppProps) {
    return (
        <Provider store={props.store}>
            <div className="app">
                <Switch>
                    <Redirect exact from="/" to="/weather" />
                    <Route path="/weather" component={WeatherContainer} />
                </Switch>
            </div>
        </Provider>
    );
}
