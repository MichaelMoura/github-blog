import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '../../../../components/Link'
import { theme } from '../../../../styles/themes'
import {
  UserCardContainer,
  UserCardImage,
  UserCardInfo,
  UserCardSubtitle,
  UserCardTitle,
} from './styles'
import { useContextSelector } from 'use-context-selector'
import { userContext } from '../../../../contexts/UserContext'

export function UserCard() {
  const { user } = useContextSelector(userContext, (state) => {
    return state
  })

  return (
    <UserCardContainer>
      <UserCardImage src={user.avatar_url} alt={user.name} />
      <UserCardInfo>
        <UserCardTitle>
          <h1>{user.name}</h1>
          <Link href={user.html_url}>Github</Link>
        </UserCardTitle>
        <p>{user.bio}</p>
        <UserCardSubtitle>
          <span>
            <FontAwesomeIcon icon={faGithub} color={theme['base-label']} />{' '}
            {'  '} {user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} color={theme['base-label']} />{' '}
            {'  '} GTPlan
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} color={theme['base-label']} />{' '}
            {'  '} {user.followers} Seguidores
          </span>
        </UserCardSubtitle>
      </UserCardInfo>
    </UserCardContainer>
  )
}
