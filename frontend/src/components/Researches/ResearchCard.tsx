import type { Article } from '@/hooks/useResearches';
import { cn } from '@/lib/utils';

interface Props {
  article: Article;
  onClick: (article: Article) => void;
}

export function ResearchCard({ article, onClick }: Props) {
  const variantColor = article.id % 2 === 0 ? 'border-primary/50' : 'border-secondary/50';
  
  const gradientVariant = article.id % 3 === 0 
    ? 'from-transparent via-primary/5 to-primary/10'
    : article.id % 3 === 1
    ? 'from-transparent via-secondary/5 to-secondary/10'
    : 'from-transparent via-accent/5 to-accent/10';

  return (
    <div 
      onClick={() => onClick(article)}
      className={cn(
        "group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-lg border bg-card p-6 transition-all duration-500",
        "hover:shadow-[0_0_30px_-5px_var(--color-primary)] hover:-translate-y-2",
        variantColor
      )}
    >
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity group-hover:opacity-100",
        gradientVariant
      )} />
      
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <h3 className="font-mono text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors line-clamp-4">
            {article.title}
          </h3>
          <p className="mt-2 text-xs text-muted-foreground uppercase tracking-widest">
            {new Date(article.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </p>
        </div>

        <div className="space-y-2 opacity-50">
           <div className="h-1 w-1/3 bg-muted-foreground/20 rounded-full" />
           <div className="h-1 w-2/3 bg-muted-foreground/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
