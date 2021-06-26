import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo.svg'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'

const FooterContainer = styled.div`
  color: hsl(168, 34%, 41%);
  background-color: #98d4c4;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FooterWrapper = styled.div`
  width: 30%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 80px 0;
`

const LogoWrapper = styled.div`
  padding-bottom: 40px;
`

const Logo = styled.img``

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LinkWrap = styled.div`
  width: 110%;
  padding-bottom: 80px;
`

const Link = styled.a`
  text-decoration: none;
  color: hsl(168, 34%, 41%);
`

const IconsWrapper = styled.div``

const IconWrap = styled.a`
  margin: 0 8px;
  text-decoration: none;
  color: hsl(168, 34%, 41%);
`

const FooterSection = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LogoWrapper>
          <Logo src={logo} />
        </LogoWrapper>
        <LinksWrapper>
          <LinkWrap>
            <Link href='https://www.google.com'>About</Link>
          </LinkWrap>
          <LinkWrap>
            <Link href='https://www.google.com'>Services</Link>
          </LinkWrap>
          <LinkWrap>
            <Link href='https://www.google.com'>Projects</Link>
          </LinkWrap>
        </LinksWrapper>
        <IconsWrapper>
          <IconWrap href='https://www.google.com'>
            <FaFacebook />
          </IconWrap>
          <IconWrap href='https://www.google.com'>
            <FaInstagram />
          </IconWrap>
          <IconWrap href='https://www.google.com'>
            <FaTwitter />
          </IconWrap>
          <IconWrap href='https://www.google.com'>
            <FaPinterest />
          </IconWrap>
        </IconsWrapper>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default FooterSection
