import styled from "styled-components"
import { TimeType } from "../../Interface"

export const Time = ({ city, code, currentTime }: TimeType) => {

    //console.log(parseInt(currentTime))

    return (
        <Wrapper>
            {
                parseInt(currentTime) > 18 || parseInt(currentTime) < 6 ?
                    <HelloDiv>
                        <Img src="assets/desktop/icon-moon.svg" />
                        <HelloTxt>GOOD NIGHT</HelloTxt>
                    </HelloDiv>
                    :
                    <HelloDiv>
                        <Img src="assets/desktop/icon-sun.svg" />
                        <HelloTxt>GOOD MORNING</HelloTxt>
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
    margin-top: 54px;
`

const HelloDiv = styled.div`
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: space-between;
`

const HelloTxt = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: white;
    letter-spacing: 3px
`
const Img = styled.img``

const TimeTxt = styled.h1`
    font-size: 100px;
    font-weight: 700;
    color: white;
`

const City = styled.h1`
    font-size: 15px;
    color: white;
    letter-spacing: 3px;
    text-transform: upperCase;
`