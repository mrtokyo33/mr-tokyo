import Hero from "../components/Hero";

function Home() {
    return (
        <div className="min-h-screen flex flex-col">   
            <main className="flex-1 container mx-auto p-4 flex flex-col items-center justify-center gap-6">
                <Hero />
            </main>
        </div>
    )
}

export default Home;