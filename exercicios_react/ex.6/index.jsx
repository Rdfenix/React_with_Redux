import React from 'react';
import ReactDom from 'react-dom';
import Family from './family';
import Member from './member';

ReactDom.render(
    <Family lastName="Oliveira">
        <Member name="Rudnei" />
        <Member name="Marcos" />
    </Family>
    , document.getElementById('app')
);