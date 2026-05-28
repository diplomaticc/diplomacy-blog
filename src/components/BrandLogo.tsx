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
  
  // 1. Vertical layout designed specifically for the center white circle badge
  if (kind === 'symbol') {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full p-1 text-center select-none">
        <img 
          src="/my-custom-logo.png" 
          className="h-7 w-7 object-contain mb-1.5 transform translate-y-1" 
          alt={label} 
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <span className="font-bold tracking-tight text-[10px] uppercase text-orange-600 font-sans leading-none transform translate-y-0.5">
          {label}
        </span>
      </div>
    );
  }

  // 2. Premium horizontal layout for the top main navigation bar
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/my-custom-logo.png" 
        className={`h-7 w-7 object-contain ${imageClassName}`} 
        alt={label} 
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
      <span className="font-bold tracking-wider text-xl uppercase text-orange-500 dark:text-orange-400 font-sans">
        {label}
      </span>
    </div>
  );
}
