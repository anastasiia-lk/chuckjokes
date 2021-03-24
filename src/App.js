import React, { useState, useEffect } from 'react';
import { CssBaseline, Container } from '@material-ui/core';

//Components
import Joke from './components/Joke';

const API_URL_jokes = `http://api.icndb.com/jokes/random/3`;
const API_URL_categories = `http://api.icndb.com/categories`;

function App() {
  const [jokes, setJokes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(API_URL_jokes)
      .then((res) => res.json())
      .then((res) => {
        setJokes(res.value);
        console.log(res.value);
        console.log(res.value[0].categories[0]);
        console.log(res.value[1].categories[0]);
        console.log(res.value[2].categories[0]);
        // console.log(res.value[0].categories);
        // console.log(res.value[0].joke);
        // console.log(jokes);
        // console.log(res.value[0].categories);
      });
  }, []);

  // useEffect(() => {
  //   fetch(API_URL_categories)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // setCategories(data.value);
  //       console.log(res);
  //       setCategories(res.value);
  //     });
  // }, []);

  return (
    <div className="App">
      {jokes.map((joke) => {
        // return <p>{joke.joke}</p>;
        return <Joke joke={joke} />;
      })}
      {/* {categories.map((category) => {
        return <Joke category={category} />;
      })} */}
    </div>
  );
}

export default App;
