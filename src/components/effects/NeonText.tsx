import { cn } from '../../utils/cn';

interface NeonTextProps {
  text: string;
  variant?: 'cyan' | 'purple' | 'mixed';
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  className?: string;
}

const variantMap = {
  cyan: 'neon-cyan',
  purple: 'neon-purple',
  mixed: 'neon-mixed',
};

export function NeonText({
  text,
  variant = 'cyan',
  as: Tag = 'span',
  className,
}: NeonTextProps) {
  return (
    <Tag
      className={cn(variantMap[variant], className)}
      style={{ animation: 'flicker 4s infinite' }}
    >
      {text}
    </Tag>
  );
}
