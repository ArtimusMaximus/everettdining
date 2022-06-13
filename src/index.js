import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import News from './components/News/News';
import EverettDining from './components/EverettDining/EverettDining';




const newsLinks = {
  news1: {
    name: 'Wall Street Journal',
    type: 'everything',
    query: 'domains=wsj.com'
  },
  news2: {
    name: 'Tech Crunch',
    type: 'top-headlines',
    query: 'sources=techcrunch'
  },
  news3: {
    name: 'Business Headlines',
    type: 'top-headlines',
    query: 'country=us'
  },
  news4: {
    name: 'Tesla News',
    type: 'everything',
    query: 'q=tesla'
  },
  news5: {
    name: 'Apple News',
    type: 'everything',
    query: 'q=apple'
  },
  localFood: {
    name: 'Dining in Everett'
  }
}



ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    <Routes>
              <Route path="/" key={0} element={<App news={newsLinks} />}>
                <Route path="/news1" key={1} element={<News key={1} news={newsLinks.news1} />} />
                <Route path="/news2" key={2} element={<News key={2} news={newsLinks.news2} />} />
                <Route path="/news3" key={3} element={<News key={3} news={newsLinks.news3} />} />
                <Route path="/news4" key={4} element={<News key={4} news={newsLinks.news4} />} />
                <Route path="/news5" key={5} element={<News key={5} news={newsLinks.news5} />} />
                <Route path="/localfood" element={<EverettDining />} />
              </Route>
    </Routes>
  </BrowserRouter>,
    
    
  
  document.getElementById('root')
);

