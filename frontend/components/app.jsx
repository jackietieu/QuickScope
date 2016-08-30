import React from 'react';
import { Link } from 'react-router';

const App = ({children}) => (
  <div>
    <header>
      <Link to="/" className="header-link"></Link>
    </header>
    {children}
  </div>
);

export default App;
