'use client';

import React, { useState } from 'react';
import './Folder.css';

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ color = '#5227FF', size = 1.6, className = '' }) => {
  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: 3 }, () => ({ x: 0, y: 0 })));

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = () => {
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: 3 }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (index) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  };

  const folderClassName = `folder ${open ? 'open' : ''}`.trim();
  const scaleStyle = { transform: `scale(${size})` };

  // Rearranged items:
  // 1st Item (Paper 1 -> Goes LEFT): WhatsApp
  // 2nd Item (Paper 2 -> Goes RIGHT): Gmail
  // 3rd Item (Paper 3 -> Goes CENTER/FRONT): LinkedIn
  const items = [
    {
      id: 'whatsapp',
      href: 'https://wa.me/917003058865',
      label: 'WhatsApp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#25d366">
          <path d="M12.004 0C5.372 0 0 5.373 0 12.001c0 2.118.553 4.184 1.597 6.009L.052 24l6.136-1.611a11.942 11.942 0 0 0 5.816 1.613c6.632 0 12.004-5.373 12.004-12.001C24.008 5.373 18.636 0 12.004 0zm6.817 17.027c-.279.789-1.395 1.45-1.921 1.503-.526.053-1.077.079-3.238-.79-2.761-1.11-4.516-3.921-4.654-4.108-.139-.187-1.121-1.493-1.121-2.851 0-1.358.706-2.022.957-2.285.25-.263.548-.329.73-.329s.365.003.523.01c.162.008.38-.063.593.454.219.533.75 1.826.813 1.958.063.132.105.286.018.462-.088.176-.132.286-.263.44-.132.154-.278.344-.396.462-.132.132-.271.275-.117.539.154.264.685 1.128 1.468 1.823.992.89 1.83 1.168 2.087 1.298.257.13.407.109.56-.067.153-.176.657-.768.831-1.028.174-.26.349-.22.589-.13.24.09 1.527.72 1.79.851.263.131.438.197.504.308.066.11.066.643-.213 1.432z"/>
        </svg>
      )
    },
    {
      id: 'mail',
      href: 'mailto:debnathpritam0802@gmail.com',
      label: 'Email',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#ea4335">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/pritam-debnath-762019239',
      label: 'LinkedIn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#0077b5">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    }
  ];

  return (
    <div style={scaleStyle} className={className}>
      <div className={folderClassName} style={folderStyle} onClick={handleClick}>
        <div className="folder__back">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={`paper paper-${i + 1}`}
              onMouseMove={e => handlePaperMouseMove(e, i)}
              onMouseLeave={() => handlePaperMouseLeave(i)}
              style={
                open
                  ? {
                      '--magnet-x': `${paperOffsets[i]?.x || 0}px`,
                      '--magnet-y': `${paperOffsets[i]?.y || 0}px`
                    }
                  : {}
              }
            >
              {open ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()} // Stop closing folder when clicking a link
                  className="w-full h-full flex items-center justify-center transition-transform hover:scale-110"
                  title={`Open Pritam's ${item.label}`}
                  aria-label={`Open Pritam's ${item.label}`}
                >
                  {item.icon}
                </a>
              ) : (
                <div className="w-full h-full flex items-center justify-center opacity-40">
                  {item.icon}
                </div>
              )}
            </div>
          ))}
          <div className="folder__front"></div>
          <div className="folder__front right"></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
