import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <>
      <div>Cabeçalho</div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
