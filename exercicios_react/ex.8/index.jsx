import React from 'react';
import ReactDom from 'react-dom';
import ClassComponent from './classComponent';

ReactDom.render(
    //<h1>Em Contrução</h1>
    <ClassComponent label="Contador" initialValue={10} />
    , document.getElementById('app')
);