import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Button, theme } from './';

const Main = () => {
  return (
    <div
      style={{
        width: '200px',
        height: '300px',
        marginLeft: '45%',
        // background: '#d1ed14',
        padding: '40px',
      }}
    >
      <Button color="primary">HHHHH</Button>
      <br />
      <br />
      <Button color="danger">HHHHH</Button>
      <br />
      <br />
      <Button>HHHHH</Button>
      <br />
      <br />
      <Button color="disable">HHHHH</Button>
    </div>
  );
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>,
  document.getElementById('app')
);
