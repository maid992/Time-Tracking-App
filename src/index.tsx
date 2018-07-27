import './index.scss';

import { Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';

const render = Component => {
    ReactDOM.render(
        <Provider>
            <Component />
        </Provider>,
        document.getElementById('app') as HTMLElement
    )
}

render(App)
