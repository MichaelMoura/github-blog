import { LinkContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  icon?: boolean
}

export function Link({ children, icon = true, ...rest }: LinkProps) {
  return (
    <LinkContainer {...rest}>
      {children} {'  '}{' '}
      {icon && <FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
    </LinkContainer>
  )
}
