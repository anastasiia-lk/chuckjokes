import React, { useState, useEffect } from 'react';
import {
  CssBaseline,
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Button,
} from '@material-ui/core';
import { borders } from '@material-ui/system';

export default function Joke({ category }) {
  const API_URL_categories = `http://api.icndb.com/jokes/random?limitTo=[${category}]`;

  const [joke, setJoke] = useState('');
  const [buttonText, setButtonText] = useState('Open for more');

  useEffect(() => {
    fetch(API_URL_categories)
      .then((res) => res.json())
      // .then((data) => setJoke(data.value));
      .then((res) => {
        console.log(res);
        setJoke(res.value.joke);
      });
  }, []);

  return (
    <div>
      <Box
        width="700px"
        display="flex"
        justifyContent="center"
        // p={1}
        m={5}
        align="center"
        border={1}
        borderColor="grey.500"
      >
        <Box m={5}>CHUCK NORRIS JOKE</Box>
        <Box m={5}>Category: {category}</Box>
        <Box m={5}>
          <Button variant="contained"> {buttonText} </Button>
        </Box>
        <Box m={5}>{joke}</Box>
      </Box>
    </div>
  );
}
