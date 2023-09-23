import React from 'react';
import './App.css';
import Article from './components/article/Article';
import Navbar from './components/navbar/navbar';
import Brand from './components/brand/brand';
import Feature from './components/feature/feature';
import Cta from './components/cta/cta';
 import Footer from './containers/footer/footer';
 import Features from './containers/features/features';
 import Blog from './containers/blog/blog';
 import Header from './containers/header/header';
 import Whatgpt3 from'./containers/whatGPT3/whatgpt3';
 import Possiblity from './containers/possiblity/possiblity';
function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header/>
      </div>
      <div>
        <Brand/>
        <Whatgpt3/>
        <Features/>
        <Possiblity/>
        <Cta/>
        <Blog/>
        <Footer/>

      </div>

      <h1>ctp-3</h1>
    </div>
  )
}

export default App;
