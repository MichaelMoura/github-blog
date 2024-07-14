import { Outlet } from 'react-router-dom'
import { Content, Header, LayoutContainer } from './styles'

import Cover from '../assets/Cover.svg'

export function Layout() {
  return (
    <LayoutContainer>
      <Header>
        <img src={Cover} alt="logo" />
      </Header>
      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  )
}
