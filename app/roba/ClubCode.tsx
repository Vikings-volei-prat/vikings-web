'use client';

import { useState } from 'react';

export default function ClubCode() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText('M75NRP');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      className="mt-4 mb-3"
      style={{
        backgroundColor: '#F8F8F8',
        borderLeft: '3px solid #F5C000',
        borderRadius: '8px',
        padding: '12px 16px',
      }}
    >
      <p className="text-xs text-gray-500 mb-1">
        Necessitaràs aquest codi per completar la compra
      </p>
      <div className="flex items-center gap-3">
        <span
          style={{
            color: '#1B4FC4',
            fontSize: '1.5rem',
            fontFamily: 'monospace',
            fontWeight: 700,
          }}
        >
          M75NRP
        </span>
        <button
          onClick={handleCopy}
          className="text-xs px-2 py-1 rounded border border-gray-300 text-gray-500 hover:border-gray-400 transition-colors"
        >
          {copied ? 'Copiat!' : 'Copiar'}
        </button>
      </div>
    </div>
  );
}
