/* eslint-disable camelcase */
import { useCallback, useEffect, useState } from 'react'
import { userApi } from '../api/axios'
import { userContext } from '../contexts/UserContext'
import { UserType } from '../@types/user'

interface UserContextProviderProps {
  children: React.ReactNode
}

interface UserApiData {
  data: UserType
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<UserType>(() => {
    const user = localStorage.getItem('user')

    if (user) {
      return JSON.parse(user) as UserType
    }

    return {} as UserType
  })

  const fetchUser = useCallback(async (username = 'MichaelMoura') => {
    const { data } = await userApi.get<string, UserApiData>(username)

    const {
      id,
      avatar_url,
      html_url,
      name,
      login,
      company,
      location,
      bio,
      followers,
      following,
    } = data

    const newUser = {
      id,
      avatar_url,
      html_url,
      name,
      login,
      company,
      location,
      bio,
      followers,
      following,
    }

    setUser(newUser)

    localStorage.setItem('user', JSON.stringify(newUser))
  }, [])

  useEffect(() => {
    if (Object.keys(user).length) return

    fetchUser()
  }, [fetchUser, user])

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  )
}
