import { useState } from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import api from '../services/api'

const sectionOrder = [
  'Project Summary',
  'Tech Stack',
  'Folder Structure',
  'Code Quality',
  'Bugs',
  'Security Issues',
  'Performance Improvements',
  'Best Practices',
  'Overall Rating'
]

const parseReview = (text) => {
  if (!text) return []
  const normalized = text.replace(/\r/g, '')
  const sections = []
  const lines = normalized.split('\n').filter(Boolean)

  let current = null
  for (const line of lines) {
    const match = line.match(/^[-*]?\s*(Project Summary|Tech Stack|Folder Structure|Code Quality|Bugs|Security Issues|Performance Improvements|Best Practices|Overall Rating)\s*[:\-]?\s*(.*)$/i)
    if (match) {
      if (current) sections.push(current)
      current = { title: match[1].trim(), content: match[2].trim() }
    } else if (current) {
      current.content += `\n${line}`
    }
  }
  if (current) sections.push(current)

  const ordered = sectionOrder.map((title) => sections.find((section) => section.title.toLowerCase() === title.toLowerCase())).filter(Boolean)
  return ordered.length ? ordered : [{ title: 'Review', content: normalized }]
}

const ReviewPage = () => {
  const [question, setQuestion] = useState('')
  const [review, setReview] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!question.trim()) return

    setLoading(true)
    setError('')
    setReview('')

    try {
      const { data } = await api.post('/review', { question })
      setReview(data.review || 'No review returned.')
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to generate review.')
    } finally {
      setLoading(false)
    }
  }

  const sections = parseReview(review)

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-6">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-400">AI Review</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Ask for an intelligent project assessment</h2>
        <p className="mt-2 text-slate-400">Describe the project or ask a specific question and receive a structured review with practical recommendations.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm text-slate-300">
            <span className="mb-2 flex items-center gap-2"><SparklesIcon className="h-4 w-4" /> Review Prompt</span>
            <textarea value={question} onChange={(e) => setQuestion(e.target.value)} rows={6} className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-brand-500" placeholder="Example: Review this e-commerce project for scalability, security, and code quality." required />
          </label>

          <button type="submit" disabled={loading} className="flex items-center gap-2 rounded-2xl bg-brand-500 px-4 py-3 font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70">
            {loading ? 'Generating review...' : 'Generate Review'}
            {loading ? <ArrowPathIcon className="h-4 w-4 animate-spin" /> : <SparklesIcon className="h-4 w-4" />}
          </button>
        </form>

        {error && <div className="mt-4 rounded-2xl border border-rose-500/20 bg-rose-500/10 px-3 py-3 text-sm text-rose-300">{error}</div>}

        {loading && <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 text-slate-400">Generating your review with the AI assistant...</div>}

        {!loading && review && (
          <div className="mt-6 space-y-4">
            {sections.map((section) => (
              <div key={section.title} className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-400">{section.content}</p>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default ReviewPage
