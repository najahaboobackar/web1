import React from 'react';
import './App.css';
import Article from './components/article/Article';
import navbar from './components/navbar/navbar';
import brand from './components/brand/brand';
import feature from './components/feature/feature';
import cta from './components/cta/cta';
 import footer from './containers/footer/footer';
 import features from './containers/features/features';
 import blog from './containers/blog/blog';
 import header from './containers/header/header';
 import whatgpt3 from'./containers/whatGPT3/whatgpt3';
 import possiblity from './containers/possiblity/possiblity';
function App() {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <navbar/>
        <header/>
      </div>
      <div>
        <brand/>
        <whatgpt3/>
        <features/>
        <possiblity/>
        <cta/>
        <blog/>
        <footer/>

      </div>

      <h1>ctp-3</h1>
    </div>
  )
}

export default App
