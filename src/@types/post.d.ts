import { UserType } from './user'

export interface PostType {
  id: number
  author_association: string
  html_url: string
  title: string
  created_at: string
  body: string
  comments: number
  user: UserType
}

export interface PostContextType {
  posts: PostType[]
  fetchPosts: (text?: string) => Promise<void>
}
