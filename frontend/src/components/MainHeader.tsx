import { useState } from 'react';
import { Atom, Terminal, BookOpen, FlaskConical, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
//import { Button } from "@/components/ui/button";

function MainHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Research', icon: <FlaskConical size={18} />, href: '/researches' },
        { name: 'Projects', icon: <Terminal size={18} />, href: '/projects' },
        { name: 'Courses', icon: <BookOpen size={18} />, href: '/courses' },
        { name: 'Japanese', icon: null, href: '/japanese' },
        { name: 'DevLog', icon: null, href: '/devlog' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
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
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link key={item.name} to={item.href} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:translate-y-[-2px]">
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                    <Link to="/login" className="bg-primary hover:bg-violet-600 text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold transition-all shadow-[0_0_15px_-3px_rgba(124,58,237,0.5)] hover:shadow-[0_0_20px_0px_rgba(124,58,237,0.7)]">
                        Join Network
                    </Link>
                </nav>

                <button 
                    className="md:hidden text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <nav className="flex flex-col p-4 space-y-4">
                        {navItems.map((item) => (
                            <Link key={item.name} to={item.href} className="flex items-center gap-3 text-muted-foreground hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                                {item.icon}
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}

export default MainHeader;