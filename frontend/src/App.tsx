import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SuperheroDetail from './components/SuperheroDetail';
import SuperheroHome from './components/SuperheroHome';

import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <main>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Superheroes App</a>
          </div>
        </nav>
      <div className="container" style={{padding: '4rem 0rem'}}>
        <Router>
            <Routes>
              <Route path="/" element={<SuperheroHome/>} />
              <Route path="/superheroes/:id" element={<SuperheroDetail/>} />
            </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
