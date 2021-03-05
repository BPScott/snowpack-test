import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// uuid should be v8.3.2, from our package.json
import {v4 as base} from 'uuid';
//uuidv4 depends upon uuid@^3.4.0, so when compiling it should pull in that
// version which will allow it access to the uuid/v4 entrypoint, which is not
// available in uuid v8
import alt from 'uuidv4';

console.log(base);
console.log(alt);

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
