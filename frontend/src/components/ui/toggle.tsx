import * as React from 'react'

export function Toggle({ checked, onChange, className }: { checked: boolean; onChange: (v:boolean)=>void; className?: string }){
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 transition-all duration-200 ${checked ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground'} ${className || ''}`}
    >
      <span className={`w-5 h-5 rounded-full bg-white/90 transform ${checked ? 'translate-x-2' : ''} transition-transform duration-200`} />
      <span className="text-xs">{checked ? 'Romaji On' : 'Romaji Off'}</span>
    </button>
  )
}

export default Toggle
