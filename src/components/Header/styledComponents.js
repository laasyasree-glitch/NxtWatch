import styled from 'styled-components'

export const NavDesktopContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding: 15px;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  color: ${props => (!props.darkMode ? '#181818' : '#ffffff')};
  position: fixed;
  width: 100%;
`
export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 98%;
`

export const WebsiteLogo = styled.img`
  width: 50%;
`
export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15%;
  height: 50px;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px;
`

export const Profile = styled.img`
  width: 20%;
  margin-right: 30px;
`

export const ThemeLogo = styled.img`
  width: 50%;
`
