import './App.css'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { Qoute } from './components/Qoute/Qoute'
import { getCountriesForTimezone } from 'countries-and-timezones';
import { Time } from './components/Time/Time';
import { Dark, Rotate, TimeType } from './Interface';
import { More } from './components/More/More';


function App() {
  const [date, setDate] = useState(new Date());
  const timezone2 = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const city = timezone2.split("/").pop()
  const timezone = getCountriesForTimezone(timezone2);
  const code = timezone[0].id
  const now: Date | number | bigint | any = new Date();
  const start: Date | number | bigint | any = new Date(now.getFullYear(), 0, 0);
  const diff: number = now - start;
  const oneDay: number = 1000 * 60 * 60 * 24;
  const dayOfYear: number = Math.floor(diff / oneDay);

  const currentTime: number | string = ('0' + date.getHours()).slice(-2) + ":" + ('0' + now.getMinutes()).slice(-2);
  const time = date.getHours();

  const [rotate, setRotate] = useState<Rotate | undefined>()


  setInterval(() => setDate(new Date()), 60 * 1000)

  const handleClick = () => {

    //return week number
    let week = Math.floor(dayOfYear / 7);
    console.log("num of week", week);

    //return week day
    console.log("week day", now.getDay());

    //return day of the year
    console.log("day of the year", dayOfYear);

    //return time zone
    console.log("time zone", timezone2);
  };






  return (
    <Wrapper time={time}>
      <Qoute />
      <Time
        city={city}
        code={code}
        currentTime={currentTime}
      />
      <More
        rotate={rotate}
        setRotate={setRotate}
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
