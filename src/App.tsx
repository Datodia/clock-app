import './App.css'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { Qoute } from './components/Qoute/Qoute'

function App() {
  const [date, setDate] = useState(new Date());

  setInterval(() => setDate(new Date()), 60 * 1000)

  const withPmAm = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleClick = () => {
    //console.log(Intl.DateTimeFormat().resolvedOptions())
  }


  return (
    <Wrapper>
      <Qoute />
      <h1>{withPmAm}</h1>
      <button onClick={handleClick}>Get Timezone</button>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  background-image: url('assets/mobile/bg-image-daytime.jpg');
  height: 100vh;
  padding-top: 32px;
`
