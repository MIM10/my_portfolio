import { useState } from 'react'
import styled from 'styled-components'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'


const Nav = styled.nav`
  left: 0;
  top: 0;
  width: 100%;
  padding: 1.25rem 3rem;
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: 0 10px 25px ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;

  @media (max-width: 768px) {
    padding: .51rem 1.5rem;
  }
`

const Logo = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
`

const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    position: fixed;
    top: ${({ open }) => (open ? '0' : '-100%')};
    left: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    transition: top 0.35s ease-in-out;
    z-index: 1000;
  }
`

const MenuItem = styled.a`
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const Hamburger = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1001;
  transition: transform 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    display: flex;
  }

  ${({ open, theme }) =>
    open &&
    `
      color: ${theme.colors.secondary};
      transform: rotate(90deg);
    `}
`

const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  
  transition: transform 0.4s ease, color 0.3s ease;

  &:hover {
    transform: rotate(20deg) scale(1.1);
    color: ${({ theme }) => theme.colors.secondary};
  }
`
const MobileThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false)

  return (
    <Nav>
      <Logo href="/">Mu'aadz</Logo>

      <Menu open={open}>
        <MenuItem href="#about" onClick={() => setOpen(false)}>About</MenuItem>
        <MenuItem href="#skills" onClick={() => setOpen(false)}>Skills</MenuItem>
        <MenuItem href="#projects" onClick={() => setOpen(false)}>Projects</MenuItem>
        <MenuItem href="#experience" onClick={() => setOpen(false)}>Experience</MenuItem>
        <MenuItem href="#contact" onClick={() => setOpen(false)}>Contact</MenuItem>
      </Menu>

      {/* Desktop actions */}
      <MobileThemeToggle>
        <RightActions>
          <ThemeToggle onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FiSun /> : <FiMoon />}
          </ThemeToggle>
        </RightActions>

        <Hamburger open={open} onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </Hamburger>
      </MobileThemeToggle>
    </Nav>
  )
}

export default Navbar
