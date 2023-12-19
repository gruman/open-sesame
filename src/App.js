import React, { useState, useEffect } from 'react';
import { docco, shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import './App.css'
function App() {
  // State to keep track of typed word
  const [typedWord, setTypedWord] = useState('');
  // State to track login status
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Event listener to handle keydown events
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      // Exclude the 'meta' key from the typed word
      if (key !== 'meta') {
        setTypedWord((prevTypedWord) => prevTypedWord + key);
      }
    };

    // Function to check for login based on typed word
    const checkLogin = () => {
      if (typedWord === 'open sesame') {
        setLoggedIn(true);
        setTypedWord('');
      }
    };

    // Add event listener when component mounts
    window.addEventListener('keydown', handleKeyDown);
    // Check for login on initial render
    checkLogin();

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [typedWord]);

  return (
    <div>
      {
        loggedIn ?
          <div className="loggedIn">
            <h2>Open Sesame - Unlocking Secrets with React</h2>
            <p className="date">Last updated 19/12/2023 by <a href="https://matthewgruman.com">Matthew Gruman</a></p>
            <p className="lead" style={{ color: "#111" }}>Type a word and unlock a secret area of your website. For fun, not security.</p>
            <p>Full code is available on <a href="https://github.com/gruman/open-sesame">GitHub</a>.</p>
            <p>A <a href="https://open-sesame-react.vercel.app">demo is available</a>,</p>
            <h2>Setting up</h2>
            <p>Create a new React app:</p>
            <SyntaxHighlighter language="javascript" style={docco}>{`npx create-react-app app-name`}
            </SyntaxHighlighter>
            <p>Next open the new folder that was creating and open App.js.</p>

            <h2>App.js</h2>
            <p>This is the app. You should be able to paste this in, save, and run "yarn start" or "npm start" to load your development server.</p>
            <p>We're setting a listener for keyboard events and adding them to state (typedWord). When typedWord is equal to the chosen password, it unlocks.</p>
            <SyntaxHighlighter language="javascript" style={docco}>{`import React, { useState, useEffect } from 'react';

function App() {
  // State to keep track of typed word
  const [typedWord, setTypedWord] = useState('');
  // State to track login status
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Event listener to handle keydown events
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      // Exclude the 'meta' key from the typed word
      if (key !== 'meta') {
        setTypedWord((prevTypedWord) => prevTypedWord + key);
      }
    };

    // Function to check for login based on typed word
    const checkLogin = () => {
      if (typedWord === 'open sesame') {
        setLoggedIn(true);
        setTypedWord('');
      }
    };

    // Add event listener when component mounts
    window.addEventListener('keydown', handleKeyDown);
    // Check for login on initial render
    checkLogin();

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [typedWord]);

  return (
    <div style={{ display: "flex", alignItems: "center", minHeight: "100vh", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", minHeight: "100vh", justifyContent: "center", backgroundColor: loggedIn ? "transparent" : "#111", width: "100%" }}>
        {/* Display appropriate message based on login status */}
        <p style={{ color: loggedIn ? "inherit" : "#fff" }}>{loggedIn ? "Logged in!" : "Type \"open sesame\""}</p>
      </div>
    </div>
  );
}

export default App;

`}
            </SyntaxHighlighter>
            <p>Full code is available on <a href="https://github.com/gruman/open-sesame">GitHub</a>.</p>

          </div>
          :

          <div className="loggedOut">
            <p>Logged out</p>
          </div>
      }
    </div>
  );
}

export default App;
