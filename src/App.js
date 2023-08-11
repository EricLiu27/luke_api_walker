import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Form from './components/Form'
import './App.css';
import Films from './components/Films'
import People from './components/People'
import Planets from './components/Planets'
import Species from './components/Species'
import Starships from './components/Starships'
import Vehicles from './components/Vehicles'


function App() {
  return (
    <div className="App">
      <Form />
      <Routes>
        <Route path="/people/:id/" element={<People />} />
        <Route path="/films/:id/" element={<Films />} />
        <Route path="/starships/:id/" element={<Starships />} />
        <Route path="/vehicles/:id/" element={<Vehicles />} />
        <Route path="/species/:id/" element={<Species />} />
        <Route path="/planets/:id/" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
