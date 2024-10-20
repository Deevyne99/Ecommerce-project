import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/hooks'
import { ReactNode } from 'react'

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const { userProfile } = useAppSelector((state) => state.userSlice)

  if (!userProfile.userId) {
    return <Navigate to={'/login'} />
  }
  return <div>{children}</div>
}

export default ProtectedRoutes
