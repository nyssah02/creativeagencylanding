import React from 'react'
import styled from 'styled-components'
import header from '../../images/desktop/image-header.jpg'
import arrow from '../../images/icon-arrow-down.svg'

const HeroContainer = styled.div`
  background-color: #000;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
`

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #fff;
`

const HeroWrapper = styled.div`
  z-index: 99;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HeroH1 = styled.h1`
  font-family: 'Fraunces', serif;
  letter-spacing: 10px;
  color: #fff;
  text-align: center;
  padding-bottom: 100px;
  margin-top: -100px;
  font-size: 2.5rem;
`

const ArrowWrapper = styled.div``

const ArrowImg = styled.img`
  width: 80%;
  height: auto;
`

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroImg src={header} />
      </HeroBg>
      <HeroWrapper>
        <HeroH1>WE ARE CREATIVES</HeroH1>
        <ArrowWrapper>
          <ArrowImg src={arrow} />
        </ArrowWrapper>
      </HeroWrapper>
    </HeroContainer>
  )
}

export default HeroSection
