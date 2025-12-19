
import React, { useState } from 'react'
import { HIRAGANA, KATAKANA } from '@/lib/kana'
import { Button } from '@/components/ui/button'
import Toggle from '@/components/ui/toggle'

export default function Kana(){
  const [setType, setSetType] = useState<'hiragana'|'katakana'>('hiragana')
  const list = setType === 'hiragana' ? HIRAGANA : KATAKANA
  const [showRomaji, setShowRomaji] = useState(true)

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto p-4">
        <section className="w-full p-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Kana — {setType === 'hiragana' ? 'Hiragana' : 'Katakana'}</h2>

            <div className="flex items-center gap-2">
              <div className="flex gap-2 items-center">
                <Button className={`px-3 ${setType==='hiragana' ? 'bg-background text-foreground' : 'bg-background text-muted-foreground'}`} onClick={() => setSetType('hiragana')}>Hiragana</Button>
                <Button className={`px-3 ${setType==='katakana' ? 'bg-background text-foreground' : 'bg-background text-muted-foreground'}`} onClick={() => setSetType('katakana')}>Katakana</Button>
                <Toggle checked={showRomaji} onChange={setShowRomaji} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-3">
            {list.map(([k,r])=> (
              <div key={k} className="flex flex-col items-center justify-center p-3 bg-card rounded">
                <div className="text-2xl font-mono">{k}</div>
                {showRomaji && <div className="text-xs text-muted-foreground mt-1">{r}</div>}
              </div>
            ))}
          </div>

        </section>
      </main>

      <div className="fixed bottom-6 right-6 z-50">
        <a href="/japanese/kana/traiin">
          <Button className="bg-primary text-primary-foreground shadow-lg transform hover:scale-105 transition">Train</Button>
        </a>
      </div>
    </div>
  )
}
