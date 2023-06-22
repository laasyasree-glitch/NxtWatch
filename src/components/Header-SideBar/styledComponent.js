import styled from 'styled-components'

export const SideBarContainer = styled.ul`
  max-height: 100vh;
  width: 18%;
  padding: 20px;
  list-style-type: none;
  margin-top: 0px;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  overflow: auto;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const OptionItem = styled.li`
  margin-bottom: 30px;
  font-size: 18px;
  text-decoration: none;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
`
export const OptionsContainer = styled.div`
  margin: 0px;
  margin-top: 15vh;
  position: fixed;
  overflow: auto;
`
export const ContactUsContainer = styled.div`
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  position: fixed;
  width: 15%;
  margin-top: 60vh;
`
export const ContactUsHeading = styled.p`
  font-size: 15px;
  padding-left: 20px;
`
export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 50px;
`
export const SocialMediaIcon = styled.img`
  width: 40px;
  height: 40px;
`
export const ContactUsDescription = styled.p`
  font-size: 15px;
  padding-left: 20px;
`
