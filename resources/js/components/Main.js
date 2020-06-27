import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container'

function Main() {
    return (
        <Container />
    );
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
