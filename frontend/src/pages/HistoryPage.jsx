import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import api from '../services/api'

const HistoryPage = () => {
  const [reviews, setReviews] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const { data } = await api.get('/my_reviews')
        setReviews(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadReviews()
  }, [])

  const filtered = useMemo(() => {
    return reviews.filter((item) => {
      const query = search.toLowerCase()
      return item.question?.toLowerCase().includes(query) || item.review?.toLowerCase().includes(query)
    })
  }, [reviews, search])

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-6">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-400">Review History</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Search across past AI reviews</h2>
        <p className="mt-2 text-slate-400">Browse previous queries and responses in one polished archive.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-6">
        <label className="relative block">
          <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 py-3 pl-12 pr-4 text-white outline-none transition focus:border-brand-500" placeholder="Search reviews" />
        </label>

        {loading ? (
          <div className="mt-6 space-y-3">
            {[...Array(3)].map((_, index) => <div key={index} className="h-24 animate-pulse rounded-3xl border border-slate-800 bg-slate-950/70" />)}
          </div>
        ) : (
          <div className="mt-6 grid gap-4">
            {filtered.length ? filtered.map((item, index) => (
              <div key={`${item.question}-${index}`} className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <span className="text-sm text-slate-500">{item.reviewed_at ? new Date(item.reviewed_at).toLocaleString() : ''}</span>
                </div>
                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-400">{item.review}</p>
              </div>
            )) : <p className="text-sm text-slate-500">No matching reviews found.</p>}
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default HistoryPage
