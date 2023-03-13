import styled from 'styled-components'

export const LikeButton = styled.button`
  color: ${props => (!props.isActive ? '#64748b' : '#2563eb')};
`
