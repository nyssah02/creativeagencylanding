import React from 'react'
import styled from 'styled-components'
import milk from '../../images/desktop/image-gallery-milkbottles.jpg'
import orange from '../../images/desktop/image-gallery-orange.jpg'
import cone from '../../images/desktop/image-gallery-cone.jpg'
import sugar from '../../images/desktop/image-gallery-sugarcubes.jpg'

const GalleryContainer = styled.div`
  width: 100%;
`

const GalleryWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const GallerySection = () => {
  return (
    <GalleryContainer>
      <GalleryWrapper>
        <ImageWrapper>
          <Image src={milk} />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={orange} />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={cone} />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={sugar} />
        </ImageWrapper>
      </GalleryWrapper>
    </GalleryContainer>
  )
}

export default GallerySection
