import * as React from 'react';

import './app.css';

interface IAppProps {
    store: any;
}

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
