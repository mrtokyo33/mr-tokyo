import React from 'react'

export default function Log(){
  const items = [
    { date: '2025-12-19', text: 'Hoje aprendi a contar coisas longas e cilíndricas (hon/pon/bon)', tags: ['#Grammar','#Vocab'] },
    { date: '2025-12-18', text: 'Pratiquei 30 minutos de leitura - artigos simples', tags: ['#Reading'] },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto p-4">
        <section className="w-full bg-card p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-semibold">Japanese Log</h2>
          <p className="text-sm text-muted-foreground mt-1">Registreinsights e pequenos avanços.</p>

          <div className="mt-6 flex flex-col gap-4">
            {items.map(i => (
              <article key={i.date} className="p-4 rounded-md border border-border bg-background">
                <div className="flex justify-between items-center">
                  <strong>{i.date}</strong>
                  <div className="text-sm text-muted-foreground">{i.tags.join(' ')}</div>
                </div>
                <p className="mt-2">{i.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
