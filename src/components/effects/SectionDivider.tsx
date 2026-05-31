import { cn } from '../../utils/cn';

interface SectionDividerProps {
  variant?: 'diagonal' | 'wave';
  className?: string;
}

export function SectionDivider({
  variant = 'diagonal',
  className,
}: SectionDividerProps) {
  if (variant === 'diagonal') {
    return (
      <div className={cn('h-20 relative overflow-hidden', className)}>
        <div
          className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/5 via-cyber-purple/5 to-transparent"
          style={{
            clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 0 100%)',
          }}
        />
      </div>
    );
  }

  return (
    <div className={cn('h-12 relative overflow-hidden', className)}>
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 48"
      >
        <path
          d="M0 24 Q 360 0, 720 24 T 1440 24"
          fill="none"
          stroke="rgba(199,255,82,0.16)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
