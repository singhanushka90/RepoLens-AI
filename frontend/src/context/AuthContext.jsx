import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import api from '../services/api'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('token')
      if (!storedToken) {
        setLoading(false)
        return
      }

      try {
        const { data } = await api.get('/profile')
        setUser(data)
        setToken(storedToken)
      } catch (error) {
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()
  }, [])

  const login = async ({ email, password }) => {
    const { data } = await api.post('/auth/login', { email, password })
    if (!data.success) {
      throw new Error(data.message || 'Login failed')
    }

    localStorage.setItem('token', data.access_token)
    setToken(data.access_token)

    const profile = await api.get('/profile')
    setUser(profile.data)
    return profile.data
  }

  const register = async ({ name, email, password }) => {
    const { data } = await api.post('/auth/signup', { name, email, password })
    if (!data.success) {
      throw new Error(data.message || 'Registration failed')
    }
    return data
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
  }

  const value = useMemo(
    () => ({ user, token, loading, login, register, logout, isAuthenticated: Boolean(token) }),
    [user, token, loading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
