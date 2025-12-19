import Hero from '@/components/Japanese/Hero'
import Sidebar from '@/components/Japanese/Sidebar'

export default function Japanese() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <Hero />
          </div>

          <aside className="md:col-span-1 w-full">
            <Sidebar />
          </aside>

        </div>
      </main>
    </div>
  )
}
