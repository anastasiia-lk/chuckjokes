import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';

export default function Joke({ joke }) {
  const [buttonText, setButtonText] = useState('Open for more');
  const [jokeText, setJokeText] = useState('');

  const handleClick = () => {
    buttonText === 'Open for more'
      ? setButtonText('Close for less')
      : setButtonText('Open for more');
    buttonText === 'Open for more' ? setJokeText(joke.joke) : setJokeText('');
  };

  return (
    <div>
      <Box
        width="1200px"
        display="flex"
        justifyContent="center"
        // p={1}
        m={5}
        align="center"
        border={1}
        borderColor="grey.500"
      >
        <Box m={5}>CHUCK NORRIS JOKE</Box>
        <Box m={5}>
          Category: {joke.categories[0] ? joke.categories[0] : 'general joke'}
        </Box>
        <Box m={5}>
          <Button variant="contained" onClick={handleClick}>
            {' '}
            {buttonText}{' '}
          </Button>
        </Box>
        <Box m={5}>{jokeText}</Box>
      </Box>
    </div>
  );
}
