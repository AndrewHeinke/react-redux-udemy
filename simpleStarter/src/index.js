import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyA_GOBsQy02FlsvC8QGaFV-Vew0qg2WEbI';

// create a new component
// this component should produce html
const App = () => {
  return <div>Andrew is awesome!</div>;
}


// Take this generated html and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
