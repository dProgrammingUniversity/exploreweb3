// ExploreSol/components/CreateNotes.tsx 
"use client";
import { createClient } from '@/utils/supabase/client'
import { useState } from 'react'

export default function CreateNotes() {
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const supabase = createClient()

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    setLoading(true)
    setMessage('Submitting...')
    const { data, error } = await supabase.from('notes').insert([{ title }])
    setLoading(false)
    if (error) {
      console.error(error)
      setMessage('Failed to add note: ' + error.message)
    } else {
      setTitle('')
      setMessage('Note added successfully!')
    }
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center px-4 py-6">
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <textarea
          className="w-full p-2 border-2 border-gray-300 bg-gray-700 rounded mb-4"
          style={{ minHeight: '100px' }} // Set the minimum height for the textarea
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter your note here..."
          disabled={loading}
        />
        <button type="submit" className="btn" disabled={loading}>Add Note</button>
        {message && <p className="text-sm mt-2">{message}</p>}
      </form>
    </div>
  )
}
