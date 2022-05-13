import './App.css';
import React from 'react';
import DisneyContainer from './containers/DisneyContainer';

function App() {
  return (
    <div className="App">
      <div className="heading">
        <img id="heading-img" src="https://logos-download.com/wp-content/uploads/2016/06/Walt_Disney_Pictures_logo.svg"/>
        <link id='font-family' rel="stylesheet" media="screen" href="https://fontlibrary.org//face/waltograph-disney" type="text/css"/>
        <h1 id="heading-title">Disney Charaters</h1>
      </div>

      <hr></hr>
      
      <DisneyContainer/>
    </div>
  );
}

export default App;
