import MainHeader from "./components/MainHeader";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      
      <main className="flex-1 container mx-auto p-4 flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold text-white animate-float">
          Protocol <span className="text-primary">INITIATED</span>
        </h1>
        
        <p className="text-muted-foreground text-center max-w-md">
          Bem-vindo ao sistema, Mr. Tokyo. O ambiente Tailwind v4 + Shadcn está operacional.
        </p>

        <div className="flex gap-4">
          <Button variant="default">Primary Action</Button>
          <Button variant="secondary">Secondary Data</Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Ghost Shell
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;