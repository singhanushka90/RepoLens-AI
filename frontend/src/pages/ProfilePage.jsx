import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { UserCircleIcon, EnvelopeIcon, IdentificationIcon } from '@heroicons/react/24/outline'
import api from '../services/api'

const ProfilePage = () => {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { data } = await api.get('/profile')
        setProfile(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [])

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-6">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-400">Profile</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Your account details</h2>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-6">
        {loading ? (
          <div className="h-24 animate-pulse rounded-3xl border border-slate-800 bg-slate-950/70" />
        ) : (
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-500/10 text-brand-400">
              <UserCircleIcon className="h-12 w-12" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white">
                <IdentificationIcon className="h-5 w-5 text-brand-400" />
                <span className="text-lg font-semibold">{profile?.name || 'Unknown user'}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <EnvelopeIcon className="h-5 w-5 text-brand-400" />
                <span>{profile?.email || 'No email provided'}</span>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default ProfilePage
