import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import Container from './container/Todo';
import reducers from './modules';
import { Provider } from 'react-redux';

// if(module.hot) {
//     module.hot.accept();
// }

// 스토어 생성
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById('app')
)

