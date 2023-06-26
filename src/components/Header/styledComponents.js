import styled from 'styled-components'

export const NavDesktopContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  padding: 15px;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  color: ${props => (!props.darkMode ? '#181818' : '#ffffff')};
  position: fixed;
  width: 100%;
  z-index: 1; /* Ensure the header is on top of other elements */
`

export const WebsiteLogo = styled.img`
  width: 120px;
  height: auto;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`

export const DropDown = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Line = styled.hr`
  width: 20px;
  height: 2px;
  background-color: #000000;
  transition: transform 0.3s ease-out;
  color: ${props => (!props.darkMode ? '#181818' : '#ffffff')};
`
