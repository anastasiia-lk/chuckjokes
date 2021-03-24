import React from 'react';
import {
  CssBaseline,
  Container,
  Typography,
  Paper,
  Box,
  Grid,
} from '@material-ui/core';
import { borders } from '@material-ui/system';

const Joke = ({ joke }) => {
  return (
    <div>
      <Box
        width="500px"
        display="flex"
        justifyContent="center"
        // p={1}
        m={5}
        align="center"
        border={1}
        borderColor="grey.500"
      >
        <Box m={5}>Chuck Norris</Box>
        <Box m={5}>Category</Box>
        <Box m={5}>Button</Box>
      </Box>
    </div>
  );
};

export default Joke;
