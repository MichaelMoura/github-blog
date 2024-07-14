import styled from 'styled-components'

export const MainCard = styled.div`
  background: ${(props) => props.theme['base-profile']};

  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  margin-top: -11rem;

  display: flex;
  align-items: center;
`
