import React, { useState, useEffect } from 'react';

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
