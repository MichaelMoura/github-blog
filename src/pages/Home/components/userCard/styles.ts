import styled from 'styled-components'
import { MainCard } from '../../../../styles/components'

export const UserCardContainer = styled(MainCard)`
  height: 13.25rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`

export const UserCardImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const UserCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: space-around;
`

export const UserCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

export const UserCardSubtitle = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1;

  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`
