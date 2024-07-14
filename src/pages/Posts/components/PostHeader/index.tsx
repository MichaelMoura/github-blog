import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '../../../../components/Link'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { PostHeaderActions, PostHeaderCard, PostHeaderIcons } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { theme } from '../../../../styles/themes'
import { PostType } from '../../../../@types/post'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

interface PostHeaderProps {
  post: PostType
}

export function PostHeader({ post }: PostHeaderProps) {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate('/')
  }

  return (
    <PostHeaderCard>
      <PostHeaderActions>
        <Link icon={false} onClick={handleGoBack}>
          <FontAwesomeIcon icon={faChevronLeft} /> {'  '}Voltar
        </Link>
        <Link href={post.html_url}>Ver no Github</Link>
      </PostHeaderActions>
      <h1>{post.title}</h1>
      <PostHeaderIcons>
        <span>
          <FontAwesomeIcon icon={faGithub} color={theme['base-label']} /> {'  '}{' '}
          {post.user.login}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} color={theme['base-label']} />{' '}
          {'  '}{' '}
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} color={theme['base-label']} />{' '}
          {'  '} {post.comments} Comentários
        </span>
      </PostHeaderIcons>
    </PostHeaderCard>
  )
}
