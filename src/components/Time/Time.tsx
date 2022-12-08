import styled from "styled-components"
import { TimeType } from "../../Interface"

export const Time = ({ city, code, currentTime }: TimeType) => {

    return (
        <Wrapper>
            {
                parseInt(currentTime) > 18 || parseInt(currentTime) < 6 ?
                    <HelloDiv>
                        <Img src="assets/desktop/icon-moon.svg" />
                        <HelloTxt>GOOD NIGHT</HelloTxt>
                        <Span>, IT’S CURRENTLY</Span>
                    </HelloDiv>
                    :
                    <HelloDiv>
                        <Img src="assets/desktop/icon-sun.svg" />
                        <HelloTxt>GOOD MORNING</HelloTxt>
                        <Span>, IT’S CURRENTLY</Span>
                    </HelloDiv>
            }

            <TimeTxt>{currentTime}</TimeTxt>
            <City>In {city}, {code}</City>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 327px;
    margin: auto;
    margin-top: 154px;
    @media screen and (min-width: 700px){
        width: 540px;
        margin-top: 54px;
    }
    @media screen and (min-width: 1000px){
        margin-left: 10%;
        margin-top: 54px;
    }
`

const HelloDiv = styled.div`
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 700px){
        width: 450px;
    }
`

const HelloTxt = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: white;
    letter-spacing: 3px;
    @media screen and (min-width: 700px){
        font-size: 18px;
    }
    
`
const Img = styled.img``

const TimeTxt = styled.h1`
    font-size: 100px;
    font-weight: 700;
    color: white;
    @media screen and (min-width: 700px){
        font-size: 150px;
    }
`

const City = styled.h1`
    font-size: 15px;
    color: white;
    letter-spacing: 3px;
    text-transform: upperCase;
    @media screen and (min-width: 700px){
        font-size: 18px;
    }
`

const Span = styled.span`
    display: none;
    font-size: 18px;
    font-weight: 400;
    color: white;
    letter-spacing: 3px;
    @media screen and (min-width: 700px){
        display: flex;
    }
`