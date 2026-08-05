import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRightIcon, UserCircleIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { useAuth } from '../context/AuthContext'

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await register(form)
      navigate('/login')
    } catch (err) {
      setError(err.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.25),_transparent_45%),linear-gradient(135deg,_#020617,_#111827)] p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl overflow-hidden rounded-[32px] border border-slate-800 bg-slate-950/80 shadow-2xl shadow-cyan-950/40 backdrop-blur">
        <div className="grid lg:grid-cols-[1fr_1.1fr]">
          <div className="bg-slate-900/80 p-8 sm:p-10 lg:p-12">
            <div className="inline-flex items-center rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-sm text-brand-400">Create account</div>
            <h1 className="mt-6 text-4xl font-semibold text-white">Start reviewing smarter.</h1>
            <p className="mt-4 text-lg text-slate-400">Join your team’s AI review workspace and begin analyzing projects from one central place.</p>
          </div>

          <div className="p-8 sm:p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-sm text-slate-300">
                <span className="mb-2 flex items-center gap-2"><UserCircleIcon className="h-4 w-4" /> Full Name</span>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-brand-500" placeholder="Aisha Khan" required />
              </label>

              <label className="block text-sm text-slate-300">
                <span className="mb-2 flex items-center gap-2"><EnvelopeIcon className="h-4 w-4" /> Email</span>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-brand-500" placeholder="you@example.com" required />
              </label>

              <label className="block text-sm text-slate-300">
                <span className="mb-2 flex items-center gap-2"><LockClosedIcon className="h-4 w-4" /> Password</span>
                <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-brand-500" placeholder="••••••••" required />
              </label>

              {error && <p className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-300">{error}</p>}

              <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 px-4 py-3 font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70">
                {loading ? 'Creating account...' : 'Create account'}
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
              Already registered? <Link to="/login" className="font-semibold text-brand-400 hover:text-brand-300">Sign in</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default RegisterPage
