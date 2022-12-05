import styled from "styled-components"
import { useState } from "react"
import { Rotate } from "../../Interface"

export const More = ({ rotate, setRotate, timezone2, dayOfYear, weekDay, week, dark }: Rotate) => {

    const handleClick = () => {
        setRotate(!rotate)
    }

    return (
        <Container>
            <Wrapper>
                <Button onClick={handleClick}>
                    <Moretxt>MORE</Moretxt>
                    <Arrow rotate={rotate}><Img src="assets/desktop/icon-arrow-down.svg" /></Arrow>
                </Button>
            </Wrapper>
            {rotate ?
                <Wrapper2 dark={dark}>
                    <Div>
                        <Year>
                            <LeftTxt>CURRENT TIMEZONE</LeftTxt>
                            <RightTxt>{timezone2}</RightTxt>
                        </Year>
                        <Year>
                            <LeftTxt>DAY OF THE YEAR</LeftTxt>
                            <RightTxt>{dayOfYear}</RightTxt>
                        </Year>
                    </Div>
                    <Div>
                        <Year>
                            <LeftTxt>DAY OF THE WEEK</LeftTxt>
                            <RightTxt>{weekDay === 0 ? 7 : weekDay}</RightTxt>
                        </Year>
                        <Year>
                            <LeftTxt>WEEK NUMBER</LeftTxt>
                            <RightTxt>{week}</RightTxt>
                        </Year>
                    </Div>
                </Wrapper2>
                : null}
        </Container>
    )
}

const Container = styled.div`
    position: relative
`

const Wrapper = styled.div`
    width: 327px;
    margin: auto;
    margin-top: 32px;
`

const Button = styled.button`
    width: 115px;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    border: none;
    margin-bottom: 40px;
`
const Moretxt = styled.h1`
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3.75px;
`
const Arrow = styled.div<Rotate>`
    width: 32px;
    height: 32px;
    background-color: #303030;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(${props => props.rotate ? '180deg' : "0deg"});
    transition: all .5s;
`
const Img = styled.img`
    
`

const Wrapper2 = styled.div<Rotate | any>`
    width: 100vw;
    height: 256px;
    background-color: rgba(${props => props.dark > 18 || props.dark < 6 ? '0,0,0,0.75' : '255,255,255,0.75'});
    backdrop-filter: blur(4px);
    position: absolute;
    padding: 48px 26px;
`

const Div = styled.div`
    width: 317px;
    margin: auto;
    
`
const Year = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`
const LeftTxt = styled.h1<Rotate | any>`
    font-size: 10px;
    color: ${props => props.dark > 18 || props.dark < 6 ? "black" : 'white'};
    letter-spacing: 2px;
    font-weight: 400;
`
const RightTxt = styled.h1<Rotate | any>`
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.dark > 18 || props.dark < 6 ? "black" : 'white'};
`