
import { useState } from 'react';
import { useResearches } from '@/hooks/useResearches';
import type { Article } from '@/hooks/useResearches';
import { ResearchCard } from '@/components/Researches/ResearchCard';
import { ResearchViewer } from '@/components/Researches/ResearchViewer';
import { Loader2 } from 'lucide-react';

export default function Researches() {
  const { data: articles, isLoading, error } = useResearches();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center text-primary">
        <Loader2 className="h-10 w-10 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-destructive text-lg">Failed to load researches</p>
          <p className="text-muted-foreground text-sm mt-2">Please check your connection to the backend</p>
        </div>
      </div>
    );
  }

  if (selectedArticle) {
    return (
      <ResearchViewer
        article={selectedArticle}
        onBack={() => setSelectedArticle(null)}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground">
          Research <span className='text-primary animate-pulse'>Hub</span>
        </h1>
        <p className="mt-4 text-muted-foreground font-mono text-sm">
          Hey there! These are my researches :3 
        </p>
      </div>

      {!articles || articles.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No research articles yet. Upload your first LaTeX paper in the admin panel!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((article) => (
            <ResearchCard
              key={article.id}
              article={article}
              onClick={setSelectedArticle}
            />
          ))}
        </div>
      )}
    </div>
  );
}
