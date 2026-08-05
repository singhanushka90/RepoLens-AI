import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import api from '../services/api'

const GithubPage = () => {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      const { data } = await api.post('/github', { github_url: url })
      setMessage(data.message || 'Repository imported successfully.')
    } catch (err) {
      setError(err.response?.data?.detail || 'GitHub import failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-6">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-400">GitHub Import</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Import a repository directly</h2>
        <p className="mt-2 text-slate-400">Paste a public GitHub repository URL to begin the review workflow.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm text-slate-300">
            <span className="mb-2 block">Repository URL</span>
            <input value={url} onChange={(e) => setUrl(e.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-brand-500" placeholder="https://github.com/owner/repository" required />
          </label>

          <button type="submit" disabled={loading} className="flex items-center gap-2 rounded-2xl bg-brand-500 px-4 py-3 font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70">
            {loading ? 'Importing...' : 'Import Repository'}
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </form>

        {message && <div className="mt-4 flex items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-3 text-sm text-emerald-300"><CheckCircleIcon className="h-5 w-5" /> {message}</div>}
        {error && <div className="mt-4 flex items-center gap-2 rounded-2xl border border-rose-500/20 bg-rose-500/10 px-3 py-3 text-sm text-rose-300"><ExclamationTriangleIcon className="h-5 w-5" /> {error}</div>}
      </motion.div>
    </div>
  )
}

export default GithubPage
