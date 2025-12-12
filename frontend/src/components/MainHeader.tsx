import { useState } from 'react';
import { Atom, Terminal, BookOpen, FlaskConical, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button"; // Usando o botão do Shadcn

function MainHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Research', icon: <FlaskConical size={18} />, href: '#research' },
        { name: 'Projects', icon: <Terminal size={18} />, href: '#projects' },
        { name: 'Courses', icon: <BookOpen size={18} />, href: '#courses' },
        { name: 'DevLog', icon: null, href: '#diary' },
    ];

    return (
        // MUDANÇA: Usando 'bg-background' e 'border-border' que agora são suas cores Tokyo
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                
                {/* Logo Area */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        {/* MUDANÇA: text-tokyo-accent virou text-primary */}
                        <Atom className="text-primary animate-spin-slow" size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg tracking-wider text-foreground group-hover:text-primary transition-colors">
                            MR. TOKYO
                        </span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                            Physics & Cybersec
                        </span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a 
                            key={item.name} 
                            href={item.href}
                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:translate-y-[-2px]"
                        >
                            {item.icon}
                            {item.name}
                        </a>
                    ))}
                    
                    {/* Botão estilizado manualmente para brilhar mais que o padrão */}
                    <button className="bg-primary hover:bg-violet-600 text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold transition-all shadow-[0_0_15px_-3px_rgba(124,58,237,0.5)] hover:shadow-[0_0_20px_0px_rgba(124,58,237,0.7)]">
                        Join Network
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <nav className="flex flex-col p-4 space-y-4">
                        {navItems.map((item) => (
                            <a 
                                key={item.name} 
                                href={item.href}
                                className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.icon}
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}

export default MainHeader;