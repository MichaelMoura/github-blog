import styled from 'styled-components'
import { MainCard } from '../../../../styles/components'

export const PostHeaderCard = styled(MainCard)`
  display: flex;
  flex-direction: column;
  align-items: normal;
  margin-bottom: 2rem;
`

export const PostHeaderActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const PostHeaderIcons = styled.div`
  display: flex;
  gap: 2rem;
`
