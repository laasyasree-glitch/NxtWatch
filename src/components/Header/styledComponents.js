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
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 20px;

  select {
    background-color: transparent;
    color: inherit;
    font-size: 16px;
    padding: 5px 8px;
    cursor: pointer;
  }

  svg {
    width: 20px;
    height: 24px;
    margin-right: 5px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DropdownOptions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  z-index: 2;

  a {
    display: block;
    padding: 8px 16px;
    color: #181818;
    text-decoration: none;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`
