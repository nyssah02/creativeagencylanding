import React from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SectionContainer = styled.div`
  /* width: 100%; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-template-areas: ${({ textfirst }) =>
    textfirst ? `'col2 col1'` : `'col1 col2'`};
`
const TextContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-area: col1;
  margin: auto;
`
const TextWrapper = styled.div`
  width: 300px;
`
const TextH2 = styled.h2`
  font-family: 'Fraunces', serif;
  padding-bottom: 20px;
  font-weight: 900;
  color: hsl(212, 27%, 19%);
  font-size: 2rem;
`

const TextP = styled.p`
  line-height: 30px;
  padding-bottom: 20px;
`

const TextA = styled.a`
  border-bottom-style: solid;
  border-color: hsl(51, 100%, 49%);
  font-family: 'Fraunces', serif;
  font-size: 0.8rem;
  color: hsl(212, 27%, 19%);
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;

  grid-area: col2;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`

const InfoSection = ({ infoData }) => {
  return (
    <InfoContainer>
      <InfoWrapper>
        {infoData.map((info, id) => {
          return (
            <SectionContainer textfirst={info.textfirst}>
              <TextContainer>
                <TextWrapper>
                  <TextH2>{info.h2}</TextH2>
                  <TextP>{info.p}</TextP>
                  <TextA>LEARN MORE</TextA>
                </TextWrapper>
              </TextContainer>
              <ImageWrapper>
                <Image src={info.img} />
              </ImageWrapper>
            </SectionContainer>
          )
        })}
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
