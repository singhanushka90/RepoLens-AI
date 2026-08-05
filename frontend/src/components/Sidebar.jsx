import { NavLink } from 'react-router-dom'
import {
  HomeIcon,
  ArrowUpTrayIcon,
  CodeBracketSquareIcon,
  ClipboardDocumentListIcon,
  UserCircleIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: HomeIcon },
  { to: '/upload', label: 'Upload Project', icon: ArrowUpTrayIcon },
  { to: '/github', label: 'GitHub Import', icon: RocketLaunchIcon },
  { to: '/review', label: 'AI Review', icon: SparklesIcon },
  { to: '/history', label: 'Review History', icon: ClipboardDocumentListIcon },
  { to: '/profile', label: 'Profile', icon: UserCircleIcon }
]

const Sidebar = ({ onClose }) => {
  return (
    <aside className="flex h-full w-72 flex-col border-r border-slate-800/80 bg-slate-950/80 px-5 py-6 backdrop-blur">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-cyan-400/20 text-brand-400 shadow-lg shadow-brand-500/10">
          <CodeBracketSquareIcon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-lg font-semibold text-white">AI Reviewer</p>
          <p className="text-sm text-slate-400">Project intelligence</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? 'bg-brand-500/15 text-brand-400 shadow-glow'
                  : 'text-slate-300 hover:bg-slate-900 hover:text-white'
              }`
            }
          >
            <Icon className="h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/90 to-slate-950/80 p-4 text-sm text-slate-400 shadow-inner shadow-black/10">
        <p className="font-semibold text-white">Accelerate reviews</p>
        <p className="mt-1">Upload projects, analyze code quality and ship confidently.</p>
      </div>
    </aside>
  )
}

export default Sidebar
