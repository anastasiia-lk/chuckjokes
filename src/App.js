import React, { useState, useEffect } from 'react';

const API_URL = `http://api.icndb.com/jokes/random/3`;

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setJokes(data.value));
    console.log(jokes);
  }, []);

  return (
    <div className="App">
      {jokes.map((joke) => {
        return <p>{joke.joke}</p>;
      })}
    </div>
  );
}

export default App;
