'use client'

import { useState } from "react"

export default function Home() {
      const [value, setValue] = useState('')
      const [messages, setMessages] = useState(null)

      const getMessages = async (e) => {
        e.preventDefault()

        const options = {
          method: 'POST',
          body: JSON.stringify({ message: value }),
          headers: {
            'Content-Type': 'application/json'
          }
        }

        const response = await fetch('/api/openai', options)
        const data = await response.json()
        console.log('data', data)
        setMessages(data)
        }

  return (
    <div>
      <div className="text-center pt-48">
<h1 className="text-7xl font-bold tracking-tight">Translate into <span className="bg-gradient-to-r from-[#ff781f] to-[#ffaf7a] text-transparent bg-clip-text">Spanish</span></h1>
     <form onSubmit={getMessages} className="pt-10">
      <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="border-2 border-gray-300 rounded-md p-2 mt-4 w-1/2 mx-auto" placeholder="Ask me anything..." />
      <button type="submit" className="ml-8 text-xl font-bold px-5 py-3 bg-[#ff781f] text-white rounded-3xl hover:bg-[#ff781f]/60">Send</button>
     </form>
     <p className="text-center text-4xl pt-20">{messages}</p>
      </div>
    </div>
  )
}
