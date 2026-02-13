'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface AdSenseProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

export default function AdSense({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
}: AdSenseProps) {
  const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID;

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && ADSENSE_ID) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [ADSENSE_ID]);

  if (!ADSENSE_ID) {
    return (
      <div className={`bg-gray-100 p-8 text-center ${className}`}>
        <p className="text-gray-500">Ad Space (Configure NEXT_PUBLIC_ADSENSE_ID)</p>
      </div>
    );
  }

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className={`adsbygoogle ${className}`}
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </>
  );
}
