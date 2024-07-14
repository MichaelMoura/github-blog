import styled from 'styled-components'

export const LinkContainer = styled.a`
  color: ${(props) => props.theme.blue};
  text-decoration: none;
  cursor: pointer;
  height: 1.5rem;

  &:hover,
  &:visited,
  &:active {
    text-decoration: none;
  }

  &:hover::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: ${(props) => props.theme.blue};
  }
`
