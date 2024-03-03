import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = () => <div>Home Page <Link to="/about">Go to About</Link></div>;
const About = () => <div>About Page <Link to="/about/team">Our Team</Link></div>;
const Team = () => <div>Team Page</div>;
const NoMatch = () => <div>404 Page Not Found</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/about/team" component={Team} />
        <Route component={NoMatch} />
      </Routes>
    </Router>
  );
};

export default App;
