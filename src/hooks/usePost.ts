import { PostType } from '../@types/post'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

export function usePost() {
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPost = useCallback(
    (post: PostType) => {
      navigate(`/posts/${post.id}`, { state: post })
    },
    [navigate],
  )

  const getPost = useCallback(() => {
    return location.state as PostType
  }, [location.state])

  return { redirectPost, getPost }
}
