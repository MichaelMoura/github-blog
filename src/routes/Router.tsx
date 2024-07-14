import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/Home'
import { Posts } from '../pages/Posts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/posts/:id" element={<Posts />} />
      </Route>
    </Routes>
  )
}
