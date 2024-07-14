import { useCallback, useState } from 'react'
import { postApi } from '../api/axios'
import { postsContext } from '../contexts/PostsContext'
import { PostType } from '../@types/post'

interface PostContextProviderProps {
  children: React.ReactNode
}

export const defaultFetchPostsParams = {
  username: 'MichaelMoura',
  repo: 'github-blog',
} as const

export function PostContextProvider({ children }: PostContextProviderProps) {
  const [posts, setPosts] = useState<PostType[]>([])

  const fetchPosts = useCallback(async (text?: string) => {
    const searchParmas = text ? `q=${encodeURIComponent(text)}` : ''

    const response = await postApi.get('', {
      params: {
        q: `${searchParmas}repo:${defaultFetchPostsParams.username}/${defaultFetchPostsParams.repo}`,
      },
    })

    const { items } = response.data

    setPosts(items)
  }, [])

  return (
    <postsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </postsContext.Provider>
  )
}
