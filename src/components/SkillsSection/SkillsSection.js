import React from 'react'
import styled from 'styled-components'

const SkillsContainer = styled.div`
  width: 100%;
`
const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
`

const Col = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`
const TextWrap = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding-top: 20%;
  color: ${({ gdcolor }) =>
    gdcolor ? 'hsl(167, 40%, 24%)' : 'hsl(198, 62%, 26%)'};
`
const SkillsH2 = styled.h2`
  text-align: center;
  font-family: 'Fraunces', serif;
  padding-bottom: 20px;
`
const SkillsP = styled.p`
  text-align: center;
  line-height: 28px;
`

const SkillsSection = ({ skillsData }) => {
  return (
    <SkillsContainer>
      <SkillsWrapper>
        {skillsData.map((skills, id) => {
          return (
            <Col>
              <ImageWrap>
                <Image src={skills.img} />
              </ImageWrap>
              <TextWrap gdcolor={skills.gdcolor}>
                <SkillsH2>{skills.h2}</SkillsH2>
                <SkillsP>{skills.p}</SkillsP>
              </TextWrap>
            </Col>
          )
        })}
      </SkillsWrapper>
    </SkillsContainer>
  )
}

export default SkillsSection
