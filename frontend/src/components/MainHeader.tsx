import { useState } from 'react';
import { Atom, Terminal, BookOpen, FlaskConical, Menu, X } from 'lucide-react';

function MainHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Research', icon: <FlaskConical size={18} />, href: '#research' },
        { name: 'Projects', icon: <Terminal size={18} />, href: '#projects' },
        { name: 'Courses', icon: <BookOpen size={18} />, href: '#courses' },
        { name: 'DevLog', icon: null, href: '#diary' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-tokyo-highlight/20 bg-tokyo-surface/80 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-tokyo-accent/20 p-2 rounded-lg group-hover:bg-tokyo-accent/30 transition-colors duration-300">
                        <Atom className="text-tokyo-accent animate-spin-slow" size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg tracking-wider text-white group-hover:text-tokyo-accent transition-colors">
                            MR. TOKYO
                        </span>
                        <span className="text-[10px] text-tokyo-muted uppercase tracking-[0.2em]">
                            Physics & Cybersec
                        </span>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a 
                            key={item.name} 
                            href={item.href}
                            className="flex items-center gap-2 text-sm font-medium text-tokyo-muted hover:text-white transition-all hover:translate-y-[-2px]"
                        >
                            {item.icon}
                            {item.name}
                        </a>
                    ))}
                    
                    <button className="bg-tokyo-accent hover:bg-violet-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all shadow-[0_0_15px_-3px_rgba(124,58,237,0.5)] hover:shadow-[0_0_20px_0px_rgba(124,58,237,0.7)]">
                        Join Network
                    </button>
                </nav>

                <button 
                    className="md:hidden text-tokyo-muted hover:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden border-t border-tokyo-highlight bg-tokyo-surface">
                    <nav className="flex flex-col p-4 space-y-4">
                        {navItems.map((item) => (
                            <a 
                                key={item.name} 
                                href={item.href}
                                className="flex items-center gap-3 text-tokyo-muted hover:text-white"
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