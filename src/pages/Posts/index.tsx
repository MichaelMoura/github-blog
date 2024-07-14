import Markdown from 'react-markdown'
import { usePost } from '../../hooks/usePost'

import { PostHeader } from './components/PostHeader'
import { PostContent } from './styles'

export function Posts() {
  const { getPost } = usePost()
  const post = getPost()

  return (
    <>
      <PostHeader post={post} />
      <PostContent>
        <Markdown>{post.body}</Markdown>
      </PostContent>
    </>
  )
}
