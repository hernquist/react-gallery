import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Config from '../config';
import Navbar from './Navbar';
import ClockApp from './clock/ClockApp';
import TimerApp from './timer/TimerApp';
import CounterApp from './counter/CounterApp';
import GreeterApp from './greeter/GreeterApp';
import TodoApp from './todos/TodoApp';
import ColorBrowserApp from './color-browser/ColorBrowserApp';
import QuoteMgr from './quote-mgr/QuoteMgr';
import MortgageCalcApp from './mortgage-calculator/MortgageCalcApp';
import SampleCharts from './highchart-samples/SampleCharts'

import { Panel } from 'react-bootstrap';
import './App.css';

const HomePage  = (props) => ( <Panel header='Home'  className="example"></Panel> );
const AboutPage = (props) => ( <Panel header='About' className="example"></Panel> );

class App extends Component {
  render() {
    return (
      <Router basename={Config.basename}>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/greetings" component={GreeterApp} />
            <Route path="/counter" component={CounterApp} />
            <Route path="/clock" component={ClockApp} />
            <Route path="/timer" component={TimerApp} />
            <Route path="/todos" component={TodoApp} />
            <Route path="/color-browser" component={ColorBrowserApp} />
            <Route path="/quotes" component={QuoteMgr} />
            <Route path="/mortgage" component={MortgageCalcApp} />
            <Route path="/charts" component={SampleCharts} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
