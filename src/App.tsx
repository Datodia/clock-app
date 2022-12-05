import './App.css'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { Qoute } from './components/Qoute/Qoute'
import { getCountriesForTimezone } from 'countries-and-timezones';
import { Time } from './components/Time/Time';
import { Dark } from './Interface';
import { More } from './components/More/More';


function App() {
  const [date, setDate] = useState(new Date());
  const timezone2: any = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const city: string | undefined = timezone2.split("/").pop()
  const timezone: any = getCountriesForTimezone(timezone2);
  const code = timezone[0].id
  const now: Date | number | bigint | any = new Date();
  const start: Date | number | bigint | any = new Date(now.getFullYear(), 0, 0);
  const diff: number = now - start;
  const oneDay: number = 1000 * 60 * 60 * 24;
  const dayOfYear: number = Math.floor(diff / oneDay);
  const week = Math.floor(dayOfYear / 7);
  const weekDay = now.getDay();
  const currentTime: number | string = ('0' + date.getHours()).slice(-2) + ":" + ('0' + now.getMinutes()).slice(-2);
  const time = date.getHours();
  const [rotate, setRotate] = useState(false)
  const dark = time;


  setInterval(() => setDate(new Date()), 60 * 1000)


  return (
    <Wrapper time={time}>
      {!rotate ? <Qoute /> : null}
      <Time
        city={city}
        code={code}
        currentTime={currentTime}
      />
      <More
        rotate={rotate}
        setRotate={setRotate}
        timezone2={timezone2}
        dayOfYear={dayOfYear}
        weekDay={weekDay}
        week={week}
        dark={dark}
      />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div<Dark>`
  background-color: #d8d8d8;
  background-blend-mode: multiply; 
  background-image: url(${props => props.time > 18 || props.time < 6 ? ('assets/mobile/bg-image-nighttime.jpg') : ('assets/mobile/bg-image-daytime.jpg')});
  height: 100vh;
  padding-top: 32px;
`
