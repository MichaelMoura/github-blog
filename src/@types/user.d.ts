export interface UserType {
  id: number
  avatar_url: string
  html_url: string
  name: string
  login: string
  company: null
  location: string
  bio: string
  followers: number
  following: number
}

export interface UserContextType {
  user: UserType
}
