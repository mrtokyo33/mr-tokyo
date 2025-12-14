
export default function Devlog() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto p-4 flex flex-col items-center justify-center gap-6">

        <section className="w-full max-w-3xl bg-card p-6 rounded-lg border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-3">DevLog</h2>
          <p className="text-muted-foreground">No entries yet — start your first log.</p>
        </section>
      </main>
    </div>
  )
}
