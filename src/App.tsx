import React from 'react';
import { useState } from 'react'
import Footer from './Footer';
import Header from './Header';
import Todo from './Todo';

function App() {
  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    /* check pressing enter key here */
  }

  return (
    <div>
      <Header></Header>

      <Todo></Todo>

      <Footer></Footer>
    </div>
  );
}

export default App;
