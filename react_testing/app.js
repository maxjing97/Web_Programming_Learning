//import the basic react 
import React from 'react';
import ReactDOM from 'react-dom';
import "./in"//import the css

//get element
const testElement = document.getElementById('app');

const header = ( 
    <h1>This is a test</h1> 
);

const reactComponent = React.createElement('h1',null, 'hello world')

ReactDOM.render(reactComponent, document.getElementById('app'));