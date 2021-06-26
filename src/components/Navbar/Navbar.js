import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo.svg'

const NavbarContainer = styled.div`
  height: 80px;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  top: 0;
  z-index: 999;
  position: absolute;
`

const NavbarWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
`

const IconWrapper = styled.div``

const Icon = styled.img``

const LinksWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`

const Link = styled.a`
  padding-right: 35px;
  text-decoration: none;
  color: #fff;
`

const Button = styled.button`
  border-style: none;
  padding: 15px 30px;
  background-color: #fff;
  font-family: 'Fraunces', serif;
  border-radius: 30px;
  cursor: pointer;
  color: hsl(212, 27%, 19%);
`

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <IconWrapper>
            <Icon src={logo} />
          </IconWrapper>
          <LinksWrapper>
            <Link href='https://www.google.com'>About</Link>
            <Link href='https://www.google.com'>Services</Link>
            <Link href='https://www.google.com'>Projects</Link>
            <Button href='https://www.google.com'>CONTACT</Button>
          </LinksWrapper>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  )
}

export default Navbar
