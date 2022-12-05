import styled from "styled-components"
import { useState } from "react"
import { Rotate } from "../../Interface"

export const More = () => {
    const [rotate, setRotate] = useState<boolean>(false)

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
            {rotate ? <Wrapper2></Wrapper2> : null}
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

const Wrapper2 = styled.div`
    width: 100vw;
    height: 256px;
    background-color: red;
    position: absolute;
`