import { SetStateAction, useEffect, useState } from 'react'
import { UserCard } from './components/userCard'
import {
  PostCard,
  PostCardContent,
  PostCardHeader,
  PostsCardsContainer,
  SearchContainer,
  SearchPosts,
} from './styles'
import { useContextSelector } from 'use-context-selector'
import { postsContext } from '../../contexts/PostsContext'
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns'
import { usePost } from '../../hooks/usePost'

export function Home() {
  const [searchValue, setSearchValue] = useState('')
  const { posts, fetchPosts } = useContextSelector(postsContext, (state) => {
    return state
  })
  const { redirectPost } = usePost()

  function handleSearchPosts(e: { target: { value: SetStateAction<string> } }) {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPosts(searchValue)
    }, 500)

    return () => clearTimeout(timer)
  }, [fetchPosts, searchValue])

  return (
    <>
      <UserCard />
      <SearchContainer>
        <div className="post-header">
          <h3>Publicações</h3>
          <span>{posts.length} Publicações</span>
        </div>
        <SearchPosts
          value={searchValue}
          onChange={handleSearchPosts}
          placeholder="Buscar conteúdo"
        />
      </SearchContainer>
      <PostsCardsContainer>
        {posts.map((post) => {
          return (
            <PostCard key={post.id} onClick={() => redirectPost(post)}>
              <PostCardHeader>
                <h4>{post.title}</h4>
                <span>
                  {formatDistanceToNow(new Date(post.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </PostCardHeader>
              <PostCardContent>{post.body}</PostCardContent>
            </PostCard>
          )
        })}
      </PostsCardsContainer>
    </>
  )
}
