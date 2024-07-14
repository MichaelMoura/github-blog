import { createContext } from 'use-context-selector'
import { PostContextType } from '../@types/post'

export const postsContext = createContext<PostContextType>(
  {} as PostContextType,
)
