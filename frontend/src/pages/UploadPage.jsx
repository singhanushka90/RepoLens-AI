import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpTrayIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import api from '../services/api'

const UploadPage = () => {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [dragActive, setDragActive] = useState(false)

  const handleUpload = async () => {
    if (!file) {
      setError('Please choose a ZIP file first.')
      return
    }

    const formData = new FormData()
    formData.append('file', file)
    setUploading(true)
    setError('')
    setMessage('')

    try {
      const { data } = await api.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      setMessage(data.message || 'Project uploaded successfully.')
    } catch (err) {
      setError(err.response?.data?.detail || 'Upload failed. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-400">Upload Project</p>
          <h2 className="text-3xl font-semibold text-white">Drop a ZIP archive for review</h2>
          <p className="text-slate-400">Upload a compressed project folder and let the AI reviewer analyze it for structure, quality and issues.</p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-6">
        <label
          onDragOver={(e) => { e.preventDefault(); setDragActive(true) }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragActive(false);
            setFile(e.dataTransfer.files?.[0] || null)
          }}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-[28px] border-2 border-dashed px-6 py-16 text-center transition ${dragActive ? 'border-brand-500 bg-brand-500/10' : 'border-slate-700 hover:border-brand-500/60'}`}
        >
          <ArrowUpTrayIcon className="h-10 w-10 text-brand-400" />
          <p className="mt-4 text-lg font-medium text-white">Drag and drop your ZIP file here</p>
          <p className="mt-2 text-sm text-slate-400">or click to browse from your device.</p>
          <input type="file" accept=".zip" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        </label>

        <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-400">
          {file ? <span className="font-medium text-white">Selected: {file.name}</span> : 'No file selected yet.'}
        </div>

        <button onClick={handleUpload} disabled={uploading} className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-4 py-3 font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70">
          {uploading ? 'Uploading...' : 'Upload Project'}
          <ArrowUpTrayIcon className="h-4 w-4" />
        </button>

        {message && <div className="mt-4 flex items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-3 text-sm text-emerald-300"><CheckCircleIcon className="h-5 w-5" /> {message}</div>}
        {error && <div className="mt-4 flex items-center gap-2 rounded-2xl border border-rose-500/20 bg-rose-500/10 px-3 py-3 text-sm text-rose-300"><ExclamationTriangleIcon className="h-5 w-5" /> {error}</div>}
      </motion.div>
    </div>
  )
}

export default UploadPage
