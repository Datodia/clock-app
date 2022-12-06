import styled from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Data } from '../../Interface'

export const Qoute = () => {
    const [data, setData] = useState<Data | null>(null)

    const handleClick = () => {
        axios.get('https://api.quotable.io/random')
            .then((res) => setData(res.data))
    }

    useEffect(() => {
        axios.get('https://api.quotable.io/random')
            .then((res) => setData(res.data))
    }, [])
    return (
        <Wrapper>

            <Quote>
                <Content>{data?.content}</Content>
                <Author>{data?.author}</Author>
            </Quote>
            <Btn onClick={handleClick}><Img src='assets/Combined Shape.svg' /></Btn>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    width: 327px;
    margin: auto;
    @media screen and (min-width: 700px){
        gap: 15px;
        width: 540px;
    }
`
const Btn = styled.button`
    background: transparent;
    border: none;
`
const Img = styled.img`
    width: 17px;
    height: 17px;
`

const Quote = styled.div`
  width: 290px;
  height: 200px;
  @media screen and (min-width: 700px){
        width: 540px;
        height: 180px;
    }
`
const Author = styled.h5`
    font-size: 12px;
    font-weight: 700;
    color: white;
    @media screen and (min-width: 700px){
        font-size: 18px;
    }
`

const Content = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: white;
    margin-bottom: 10px;
    @media screen and (min-width: 700px){
        font-size: 18px;
    }
`
