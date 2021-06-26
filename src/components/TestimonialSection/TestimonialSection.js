import React from 'react'
import styled from 'styled-components'

const TestiContainer = styled.div`
  width: 100%;
  background-color: #fff;
`

const TestiWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: 120px 0;
`

const H2Wrapper = styled.div``

const TestiH2 = styled.h2`
  font-family: 'Fraunces', serif;
  letter-spacing: 5px;
  font-size: 1rem;
  color: hsl(232, 10%, 55%);
`

const ReviewsContainer = styled.div`
  padding-top: 55px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  grid-gap: 50px;
`

const Review = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const ImgWrapper = styled.div`
  padding-bottom: 60px;
`

const Img = styled.img`
  border-radius: 100%;
  width: 70px;
`

const ReviewP = styled.p`
  padding-bottom: 60px;
  line-height: 25px;
  font-size: 0.9rem;
  color: hsl(212, 27%, 19%);
`

const NameP = styled.p`
  font-family: 'Fraunces', serif;
  padding-bottom: 10px;
  color: hsl(212, 27%, 19%);
`

const JobP = styled.p`
  color: hsl(232, 10%, 55%);
  font-size: 0.8rem;
`

const TestimonialSection = ({ testiData }) => {
  return (
    <TestiContainer>
      <TestiWrapper>
        <H2Wrapper>
          <TestiH2>CLIENT TESTIMONIALS</TestiH2>
        </H2Wrapper>
        <ReviewsContainer>
          {testiData.map((testi, id) => {
            return (
              <Review>
                <ImgWrapper>
                  <Img src={testi.img} />
                </ImgWrapper>
                <ReviewP>{testi.p}</ReviewP>
                <NameP>{testi.name}</NameP>
                <JobP>{testi.desig}</JobP>
              </Review>
            )
          })}
        </ReviewsContainer>
      </TestiWrapper>
    </TestiContainer>
  )
}

export default TestimonialSection
