import { Loader2, Heart } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  medical?: boolean;
}

const LoadingSpinner = ({ size = 'md', text, medical = false }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  };

  const Icon = medical ? Heart : Loader2;

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Icon 
        className={`${sizeClasses[size]} text-primary animate-spin`}
        style={{
          animationDuration: medical ? '1s' : '1s'
        }}
      />
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;