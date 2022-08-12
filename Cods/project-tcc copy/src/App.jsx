import React, { useState } from 'react'

import { Container } from './CssApp.js';
import { GlobalStyled } from './components/GlobalStyled/GlobalStyled';
import Navbar from './components/Header/Navbar.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Container>
      <Navbar/>
      <GlobalStyled/>
    </Container>
  )
}

export default App