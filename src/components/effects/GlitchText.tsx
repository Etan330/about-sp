import { useState, useCallback } from 'react';
import { cn } from '../../utils/cn';

interface GlitchTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'span';
  className?: string;
}

export function GlitchText({ text, as: Tag = 'h1', className }: GlitchTextProps) {
  const [glitching, setGlitching] = useState(false);

  const onMouseEnter = useCallback(() => {
    if (glitching) return;
    setGlitching(true);
    setTimeout(() => setGlitching(false), 600);
  }, [glitching]);

  return (
    <Tag
      className={cn(
        'relative inline-block',
        glitching && 'glitch-active',
        className,
      )}
      onMouseEnter={onMouseEnter}
      style={
        glitching
          ? {
              textShadow:
                '2px 0 #ff6b35, -2px 0 #c7ff52, 0 0 18px rgba(199,255,82,0.35)',
              animation: 'none',
            }
          : undefined
      }
    >
      {text}
      {glitching && (
        <>
          <span
            aria-hidden
            className="absolute inset-0 text-cyber-magenta"
            style={{
              clipPath: 'inset(0 0 60% 0)',
              transform: 'translate(-2px, 1px)',
              animation: 'glitch-top 0.15s infinite linear alternate-reverse',
            }}
          >
            {text}
          </span>
          <span
            aria-hidden
            className="absolute inset-0 text-cyber-cyan"
            style={{
              clipPath: 'inset(60% 0 0 0)',
              transform: 'translate(2px, -1px)',
              animation: 'glitch-bottom 0.15s infinite linear alternate-reverse',
            }}
          >
            {text}
          </span>
        </>
      )}
    </Tag>
  );
}
