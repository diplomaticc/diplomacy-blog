import React from 'react';

type BrandLogoKind = 'symbol' | 'wordmark';
type BrandLogoTone = 'theme' | 'default' | 'inverted';

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  kind?: BrandLogoKind;
  label?: string;
  tone?: BrandLogoTone;
}

export default function BrandLogo({
  className = '',
  imageClassName = '',
  kind = 'wordmark',
  label = 'DIPLOMATICC',
  tone = 'theme'
}: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/my-custom-logo.png" 
        className={`h-7 w-7 object-contain ${imageClassName}`} 
        alt={label} 
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
      <span className="font-bold tracking-wider text-xl uppercase text-cyan-400 dark:text-cyan-400 font-sans drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]">
        {label}
      </span>
    </div>
  );
}
