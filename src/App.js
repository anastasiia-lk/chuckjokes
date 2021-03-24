import React, { useState, useEffect } from 'react';
import { CssBaseline, Container } from '@material-ui/core';

//Components
import Joke from './components/Joke';

const API_URL_jokes = `http://api.icndb.com/jokes/random/3`;
const API_URL_categories = `http://api.icndb.com/categories`;

function App() {
  // const [jokes, setJokes] = useState([]);
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   fetch(API_URL_jokes)
  //     .then((res) => res.json())
  //     .then((data) => setJokes(data.value));
  //   console.log(jokes);
  // }, []);

  useEffect(() => {
    fetch(API_URL_categories)
      .then((res) => res.json())
      .then((res) => {
        // setCategories(data.value);
        console.log(res);
        setCategories(res.value);
      });
  }, []);

  return (
    <div className="App">
      {/* {jokes.map((joke) => {
        // return <p>{joke.joke}</p>;
        return <Joke joke={joke.joke} />;
      })} */}
      {categories.map((category) => {
        return <Joke category={category} />;
      })}
    </div>
  );
}

export default App;
