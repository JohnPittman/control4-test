import * as React from 'react';

import './app.css';

interface IAppProps {
    store: any;
}

class App extends React.PureComponent<IAppProps, any> {
    render() {
        return (
            <div className="app">
                <span>7ff7</span>
            </div>
        );
    }
}

export default App;
