import { createContext } from 'use-context-selector'
import { UserContextType } from '../@types/user'

export const userContext = createContext<UserContextType>({} as UserContextType)
