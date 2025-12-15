import { useEffect, useRef } from 'react';

interface Props {
  content: string;
  className?: string;
}

declare global {
  interface Window {
    MathJax?: {
      typesetClear: () => void;
      typesetPromise: (elements?: HTMLElement[]) => Promise<void>;
    };
  }
}

export function MathRenderer({ content, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.MathJax && containerRef.current) {
      window.MathJax.typesetClear();
      window.MathJax.typesetPromise([containerRef.current]).catch((err) => {
        console.error('MathJax rendering error:', err);
      });
    }
  }, [content]);

  return (
    <div 
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
