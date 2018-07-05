import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

const App: React.SFC = () =>
    <div>
        Hello, hot reloading
    </div>;

const HotApp = hot(module)(App);

ReactDOM.render(<HotApp />, document.getElementById('root'));
