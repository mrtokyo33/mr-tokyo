import { useState } from 'react'
import { Button } from '../components/ui/button'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('login', { email, password })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto p-4 flex flex-col items-center justify-center gap-6">

        <form onSubmit={handleSubmit} className="w-full max-w-md bg-card p-6 rounded-lg border border-border">
          <label className="block mb-2 text-sm font-medium text-muted-foreground">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full mb-4 p-2 rounded-md bg-input border border-border text-foreground" />

          <label className="block mb-2 text-sm font-medium text-muted-foreground">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full mb-4 p-2 rounded-md bg-input border border-border text-foreground" />

          <div className="flex items-center justify-between">
            <Button type="submit">Sign in</Button>
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground">Forgot?</a>
          </div>
        </form>
      </main>
    </div>
  )
}
