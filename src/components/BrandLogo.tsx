import { logoMark } from '@/lib/brand';
import { cn } from '@/lib/utils';

type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  tagline?: boolean;
};

export default function BrandLogo({ className, markClassName, showWordmark = true, tagline = false }: BrandLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img
        src={logoMark}
        alt="Infra Stations logo"
        width={40}
        height={40}
        className={cn('h-9 w-9 object-contain', markClassName)}
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[19px] font-extrabold tracking-tight text-foreground">
            Infra<span className="text-gradient-brand">Stations</span>
          </span>
          {tagline && (
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Web · Cloud · AI
            </span>
          )}
        </span>
      )}
    </span>
  );
}
