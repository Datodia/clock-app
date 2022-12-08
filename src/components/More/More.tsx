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
                    {rotate ? <Moretxt>LESS</Moretxt> : <Moretxt>MORE</Moretxt>}
                    <Arrow rotate={rotate}><Img src="assets/desktop/icon-arrow-down.svg" /></Arrow>
                </Button>
            </Wrapper>
            {rotate ?
                <Wrapper2 dark={dark}>
                    <Div>
                        <Year>
                            <LeftTxt dark={dark}>CURRENT TIMEZONE</LeftTxt>
                            <RightTxt dark={dark} >{timezone2}</RightTxt>
                        </Year>
                        <Year>
                            <LeftTxt dark={dark}>DAY OF THE YEAR</LeftTxt>
                            <RightTxt dark={dark}>{dayOfYear}</RightTxt>
                        </Year>
                    </Div>
                    <Div>
                        <Year>
                            <LeftTxt dark={dark}>DAY OF THE WEEK</LeftTxt>
                            <RightTxt dark={dark}>{weekDay === 0 ? 7 : weekDay}</RightTxt>
                        </Year>
                        <Year>
                            <LeftTxt dark={dark}>WEEK NUMBER</LeftTxt>
                            <RightTxt dark={dark}>{week}</RightTxt>
                        </Year>
                    </Div>
                </Wrapper2>
                : null}
        </Container>
    )
}

const Container = styled.div`

`

const Wrapper = styled.div`
    width: 327px;
    margin: auto;
    margin-top: 32px;
    @media screen and (min-width: 700px){
        width: 540px;
    }
    @media screen and (min-width: 1000px){
        display: flex;
        justify-content: end;
        margin-right: 165px;
        margin-top: -40px
    }
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
    @media screen and (min-width: 700px){
        width: 140px;
        height: 50px;
        border-radius: 28px;
    }
`
const Moretxt = styled.h1`
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3.75px;
    @media screen and (min-width: 700px){
        font-size: 16px;
    }
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
    &:hover{
        background-color: #999;
    }
    @media screen and (min-width: 700px){
        width: 40px;
        height: 40px;
    }
`
const Img = styled.img`
    
`

const Wrapper2 = styled.div<Rotate | any>`
    width: 100vw;
    position: fixed;
    bottom: 0;
    height: 30vh;
    background-color: rgba(${props => props.dark > 18 || props.dark < 6 ? '0,0,0,0.75' : '255,255,255,0.75'});
    backdrop-filter: blur(4px);
    position: absolute;
    padding: 48px 26px;
    overflow: hidden;
    @media screen and (min-width: 700px){
        height: 30vh;
        padding: 70px 114px;
    }
    @media screen and (min-width: 1000px){
        height: 44vh;
    }
    
`

const Div = styled.div`
    @media screen and (min-width: 700px){
        display: flex;
        width: 540px;
        margin: auto;
        justify-content: space-between;
    }
    @media screen and (min-width: 1000px){
        width: 90%;
    }
    
`
const Year = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    @media screen and (min-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`
const LeftTxt = styled.h1<Rotate | any>`
    font-size: 10px;
    color: ${props => props.dark > 18 || props.dark < 6 ? "white" : 'black'};
    letter-spacing: 2px;
    font-weight: 400;
    @media screen and (min-width: 700px){
       font-size: 13px;
       width: 170px
    }
    @media screen and (min-width: 1000px){
        font-size: 15px;
        width: 200px;
        margin-bottom: 15px;
    }
`
const RightTxt = styled.h1<Rotate | any>`
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.dark > 18 || props.dark < 6 ? "white" : 'black'};
    @media screen and (min-width: 700px){
       font-size: 35px;
    }
    @media screen and (min-width: 1000px){
        font-size: 60px;;
    }
`