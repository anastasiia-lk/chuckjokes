import React, { useState, useEffect } from 'react';

//Components
import Joke from './components/Joke';

const API_URL_jokes = `http://api.icndb.com/jokes/random/3:splat 200`;

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch(API_URL_jokes)
      .then((res) => res.json())
      .then((res) => {
        setJokes(res.value);
        console.log(res.value);
        console.log(res.value[0].categories[0]);
        console.log(res.value[1].categories[0]);
        console.log(res.value[2].categories[0]);
      });
  }, []);

  return (
    <div className="App">
      {jokes.map((joke) => {
        return <Joke joke={joke} />;
      })}
    </div>
  );
}

export default App;
