import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import LanguageDescrPage from './pages/LanguageDescrPage/LanguageDescrPage';
import TestPage from './pages/TestPage/TestPage';
import ResultPage from './pages/ResultPage/ResultPage';
import ContactPage from './pages/ContactPage/ContactPage';
// import css from './App.module.css';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/language_descr" component={LanguageDescrPage} />
        <Route exact path="/test" component={TestPage} />
        <Route exact path="/result" component={ResultPage} />
        <Route exact path="/contacts" component={ContactPage} />
      </Router>
    </>
  );
}

export default App;
