import React from 'react';
import ReactDOM from 'react-dom';

import Container from './container/Todo';

if(module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <Container />,
    document.getElementById('app')
)

