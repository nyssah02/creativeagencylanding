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
`

const H2Wrapper = styled.div``

const TestiH2 = styled.h2``

const ReviewsContainer = styled.div``

const Review = styled.div``

const ImgWrapper = styled.div``

const Img = styled.img``

const ReviewP = styled.p``

const NameP = styled.p``

const JobP = styled.p``

const TestimonialSection = () => {
  return (
    <TestiContainer>
      <TestiWrapper>
        <H2Wrapper>
          <TestiH2></TestiH2>
        </H2Wrapper>
        <ReviewsContainer>
          <Review>
            <ImgWrapper>
              <Img />
            </ImgWrapper>
            <ReviewP></ReviewP>
            <NameP></NameP>
            <JobP></JobP>
          </Review>
        </ReviewsContainer>
      </TestiWrapper>
    </TestiContainer>
  )
}

export default TestimonialSection
