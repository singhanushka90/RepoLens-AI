import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpTrayIcon, SparklesIcon, DocumentTextIcon, ClockIcon } from '@heroicons/react/24/outline'
import api from '../services/api'

const DashboardPage = () => {
  const [dashboard, setDashboard] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const { data } = await api.get('/dashboard')
        setDashboard(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadDashboard()
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="h-24 animate-pulse rounded-3xl border border-slate-800 bg-slate-900/80" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-glow">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-brand-400">Overview</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Hello, {dashboard?.profile?.name || 'there'}.</h2>
            <p className="mt-2 max-w-2xl text-slate-400">Monitor uploads, track reviews, and keep your AI review workflow moving.</p>
          </div>
          <div className="rounded-2xl border border-brand-500/20 bg-brand-500/10 px-4 py-3 text-sm text-brand-300">
            {dashboard?.statistics?.total_reviews || 0} reviews completed
          </div>
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { title: 'Total uploads', value: dashboard?.statistics?.total_uploads || 0, icon: ArrowUpTrayIcon, accent: 'text-cyan-400' },
          { title: 'Total reviews', value: dashboard?.statistics?.total_reviews || 0, icon: SparklesIcon, accent: 'text-violet-400' },
          { title: 'Recent uploads', value: dashboard?.recent_uploads?.length || 0, icon: DocumentTextIcon, accent: 'text-emerald-400' },
          { title: 'Recent reviews', value: dashboard?.recent_reviews?.length || 0, icon: ClockIcon, accent: 'text-amber-400' }
        ].map((card) => {
          const Icon = card.icon
          return (
            <div key={card.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">{card.title}</p>
                <Icon className={`h-5 w-5 ${card.accent}`} />
              </div>
              <p className="mt-4 text-3xl font-semibold text-white">{card.value}</p>
            </div>
          )
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Recent uploads</h3>
            <span className="text-sm text-slate-400">Latest project activity</span>
          </div>
          <div className="mt-4 space-y-3">
            {(dashboard?.recent_uploads || []).length ? dashboard.recent_uploads.map((item, index) => (
              <div key={`${item.project_name}-${index}`} className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-white">{item.project_name || 'Project'}</p>
                  <span className="text-sm text-slate-400">{item.total_documents || 0} docs</span>
                </div>
                <p className="mt-1 text-sm text-slate-500">{item.uploaded_at ? new Date(item.uploaded_at).toLocaleString() : 'Recently uploaded'}</p>
              </div>
            )) : <p className="text-sm text-slate-500">No uploads yet.</p>}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Recent reviews</h3>
            <span className="text-sm text-slate-400">Latest AI insights</span>
          </div>
          <div className="mt-4 space-y-3">
            {(dashboard?.recent_reviews || []).length ? dashboard.recent_reviews.map((item, index) => (
              <div key={`${item.question}-${index}`} className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                <p className="font-medium text-white">{item.question}</p>
                <p className="mt-1 text-sm text-slate-500">{item.reviewed_at ? new Date(item.reviewed_at).toLocaleString() : 'Recently reviewed'}</p>
              </div>
            )) : <p className="text-sm text-slate-500">No reviews yet.</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
