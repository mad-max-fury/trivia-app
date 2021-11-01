
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom"
import ConfigDifficulty from './layoutPages/ConfigDifficulty';
import QuestionsLayout from './layoutPages/QuestionsLayout';
import ResultLayout from './layoutPages/ResultLayout';
import Performance from './layoutPages/Performance';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Trivia app</h1>

        <Switch>
          <Route path='/' exact>
            <ConfigDifficulty />
          </Route>
          <Route path='/questions' >
            <QuestionsLayout />

          </Route>
          <Route path='/result'>
            <ResultLayout />
          </Route>
          <Route path='/performance'>
            <Performance />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
