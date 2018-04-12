import * as React from 'react';

import { IAppProps } from './app.d';

import './app.css';

class App extends React.PureComponent<IAppProps, any> {
    render() {
        return (
            <div className="app">
                <span>App</span>
            </div>
        );
    }
}

export default App;
