import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Bars3Icon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import Sidebar from '../components/Sidebar'
import ThemeToggle from '../components/ThemeToggle'
import { useAuth } from '../context/AuthContext'

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {mobileOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-slate-950/80" onClick={() => setMobileOpen(false)} />
            <div className="relative h-full w-72">
              <Sidebar onClose={() => setMobileOpen(false)} />
            </div>
          </div>
        )}

        <div className="flex-1">
          <header className="border-b border-slate-800 bg-slate-950/80 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="rounded-2xl border border-slate-800 p-2 lg:hidden" onClick={() => setMobileOpen(true)}>
                  <Bars3Icon className="h-5 w-5" />
                </button>
                <div>
                  <p className="text-sm text-slate-400">Welcome back</p>
                  <h1 className="text-xl font-semibold text-white">AI Project Reviewer</h1>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-rose-500 hover:text-rose-300"
                >
                  <ArrowRightOnRectangleIcon className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          </header>

          <main className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
