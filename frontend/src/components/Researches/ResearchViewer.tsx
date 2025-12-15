import { useState } from 'react';
import type { Article } from '@/hooks/useResearches';
import { MathRenderer } from './MathRenderer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, ScrollText, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  article: Article;
  onBack: () => void;
}

type ReadingMode = 'scroll' | 'slide';

function splitContentIntoSections(htmlContent: string): string[] {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  
  const sections: string[] = [];
  let currentSection = '';
  
  Array.from(tempDiv.children).forEach((element) => {
    if (element.tagName === 'H1' || element.tagName === 'H2') {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = element.outerHTML;
    } else {
      currentSection += element.outerHTML;
    }
  });
  
  if (currentSection) {
    sections.push(currentSection);
  }
  
  return sections.length > 0 ? sections : [htmlContent];
}

export function ResearchViewer({ article, onBack }: Props) {
  const [mode, setMode] = useState<ReadingMode>('scroll');
  const [currentPage, setCurrentPage] = useState(0);
  
  const sections = mode === 'slide' ? splitContentIntoSections(article.html_content) : [];
  const totalPages = sections.length;

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black/95 relative"> 
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/80 px-6 py-4 backdrop-blur-md">
        <Button 
          variant="ghost" 
          onClick={onBack} 
          className="gap-2 text-zinc-400 hover:text-white hover:bg-white/5"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>

        <div className="flex gap-2 rounded-lg border border-white/10 bg-black/50 p-1">
          <Button 
            variant={mode === 'scroll' ? 'secondary' : 'ghost'} 
            size="sm"
            onClick={() => { setMode('scroll'); setCurrentPage(0); }}
            className={mode === 'scroll' ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-white"}
          >
            <ScrollText className="mr-2 h-4 w-4" /> Scroll
          </Button>
          <Button 
            variant={mode === 'slide' ? 'secondary' : 'ghost'} 
            size="sm"
            onClick={() => { setMode('slide'); setCurrentPage(0); }}
            className={mode === 'slide' ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-white"}
          >
            <BookOpen className="mr-2 h-4 w-4" /> Focus
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8 lg:py-12">
        <div className="min-h-[85vh] rounded-xl border border-white/5 bg-[#0a0a0a] p-8 shadow-2xl shadow-black ring-1 ring-white/5 md:p-12 lg:p-16">
          
          <header className="mb-12 border-b border-zinc-800 pb-8 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl font-serif">
              {article.title}
            </h1>
            <p className="mt-6 text-sm font-medium uppercase tracking-widest text-zinc-500">
              {article.author_name} • {new Date(article.created_at).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </p>
          </header>

          {mode === 'scroll' ? (
            <MathRenderer 
              content={article.html_content} 
              className="prose prose-invert prose-lg max-w-none 
                prose-headings:font-serif prose-headings:text-zinc-100 
                prose-p:text-zinc-300 prose-p:leading-loose 
                prose-strong:text-white prose-strong:font-bold
                prose-code:text-purple-400 prose-code:bg-purple-400/10 prose-code:rounded prose-code:px-1
                prose-pre:bg-[#050505] prose-pre:border prose-pre:border-zinc-800"
            />
          ) : (
            <div className="relative flex min-h-[50vh] flex-col justify-between">
              <MathRenderer 
                content={sections[currentPage] || ''} 
                className="prose prose-invert prose-lg max-w-none 
                  prose-headings:font-serif prose-headings:text-zinc-100 
                  prose-p:text-zinc-300 prose-p:leading-loose
                  prose-pre:bg-[#050505] prose-pre:border prose-pre:border-zinc-800 animate-in fade-in slide-in-from-bottom-4 duration-500"
              />
              
              <div className="mt-12 flex items-center justify-between border-t border-zinc-800 pt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  className="gap-2 border-zinc-700 bg-transparent text-zinc-300 hover:bg-zinc-800"
                >
                  <ChevronLeft className="h-4 w-4" /> Previous
                </Button>
                
                <span className="text-xs text-zinc-500 font-mono tracking-widest">
                  PAGE {currentPage + 1} OF {totalPages}
                </span>
                
                <Button
                  variant="outline"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages - 1}
                  className="gap-2 border-zinc-700 bg-transparent text-zinc-300 hover:bg-zinc-800"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}