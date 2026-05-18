'use client';

import React, { useMemo, useRef, useEffect, useCallback } from 'react';

const DEFAULT_REVIEWS = [
  {
    name: 'Rajinder M.',
    role: 'ImpactQA',
    platform: 'Upwork',
    avatar: './assets/images/testimonial/rajinder-n.jpg',
    text: 'I enjoyed working with Pritam and will likely have additional jobs for him in the future.'
  },
  {
    name: 'Raghuivra R.',
    role: 'CEO',
    platform: 'Upwork',
    avatar: 'RR',
    text: "We engaged Pritham's services to support the testing of our software solution developed using the Cypress Testing automation framework. He quickly grasped our requirements and translated them into an actionable plan. His combined expertise in front-end development and automation testing played a pivotal role in executing our test cases efficiently and effectively."
  },
  {
    name: 'Raghuivra R.',
    role: 'CEO',
    platform: 'Fiverr',
    avatar: 'RR',
    text: 'This was our first exposure to the Cypress Framework - Pritham was very instrumental in understanding our requirements - Helping us chart the next steps on using this framework and went beyond in getting our environment set up - The initial set of deliverables were of high quality.'
  },
  {
    name: 'Sagar N.',
    role: 'QA Specialist',
    platform: 'Fiverr',
    avatar: './assets/images/testimonial/sagar-n.webp',
    text: 'Pritam is very sincere! He went above and beyond to solve the automation issue i was having. I really appreciate his efforts. Would love to work with him again! Thank you'
  },
  {
    name: 'Sarah K.',
    role: 'Product Manager',
    platform: 'Upwork',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    text: 'Outstanding frontend engineering skills. Pritham migrated our legacy applications to Next.js flawlessly, improving our web vitals by 40%.'
  },
  {
    name: 'Alex D.',
    role: 'Founder',
    platform: 'Fiverr',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    text: 'Exceptional developer! Great communication and highly proactive. The n8n automated workflow and the React dashboards work exactly as intended.'
  }
];

const CARD_W = 280;
const CARD_H = 340;
const RADIUS = 350;
const TILT_SENSITIVITY = 10;
const DRAG_SENSITIVITY = 0.5;
const INERTIA_FRICTION = 0.95;
const AUTOSPIN_SPEED = 0.08;
const IDLE_TIMEOUT = 2000;

const Card = React.memo(({
  review,
  transform,
  cardW,
  cardH
}) => (
  <div className="absolute" style={{
    width: cardW,
    height: cardH,
    transform,
    transformStyle: 'preserve-3d',
    willChange: 'transform'
  }}>
    <div className="w-full h-full rounded-3xl bg-neutral-950 p-6 text-white flex flex-col justify-between" 
         style={{
           backfaceVisibility: 'hidden',
           border: '1.5px solid rgba(255, 255, 255, 0.08)'
         }}>
      {/* Top Row: Stars and Platform */}
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
          review.platform === 'Upwork' 
            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
            : 'bg-green-500/10 text-green-400 border border-green-500/20'
        }`}>
          {review.platform}
        </span>
      </div>

      {/* Review Text Content */}
      <div className="flex-grow flex items-center my-4 overflow-hidden">
        <p className="text-[13px] font-light leading-relaxed italic text-left text-neutral-200 line-clamp-6 w-full">
          "{review.text}"
        </p>
      </div>

      {/* Subtle Horizontal Divider */}
      <div className="w-full h-[1px] bg-neutral-800/80 mb-4"></div>

      {/* Client Profile Footer */}
      <div className="flex items-center gap-3 w-full">
        {review.avatar.startsWith('http') || review.avatar.startsWith('./') ? (
          <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-800 flex-shrink-0">
            <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-sm font-semibold text-neutral-300 flex-shrink-0">
            {review.avatar}
          </div>
        )}
        <div className="flex flex-col text-left overflow-hidden">
          <span className="text-xs font-semibold text-neutral-100 truncate">{review.name}</span>
          <span className="text-[10px] text-neutral-400 truncate">{review.role}</span>
        </div>
      </div>
    </div>
  </div>
));
Card.displayName = 'Card';

const ThreeDCarousel = React.memo(({
  reviews = DEFAULT_REVIEWS,
  radius = RADIUS,
  cardW = CARD_W,
  cardH = CARD_H
}) => {
  const parentRef = useRef(null);
  const wheelRef = useRef(null);
  const rotationRef = useRef(0);
  const tiltRef = useRef(0);
  const targetTiltRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef(0);
  const initialRotationRef = useRef(0);
  const lastInteractionRef = useRef(Date.now());
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = e => {
      if (!parentRef.current || isDraggingRef.current) return;
      lastInteractionRef.current = Date.now();
      const parentRect = parentRef.current.getBoundingClientRect();
      const mouseY = e.clientY - parentRect.top;
      const normalizedY = (mouseY / parentRect.height - 0.5) * 2;
      targetTiltRef.current = -normalizedY * TILT_SENSITIVITY;
    };

    const handleMouseLeave = () => {
      targetTiltRef.current = 0;
    };

    const parent = parentRef.current;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.01) {
          rotationRef.current += velocityRef.current;
          velocityRef.current *= INERTIA_FRICTION;
        } else if (Date.now() - lastInteractionRef.current > IDLE_TIMEOUT) {
          rotationRef.current += AUTOSPIN_SPEED;
        }
      }
      tiltRef.current += (targetTiltRef.current - tiltRef.current) * 0.1;
      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotateX(${tiltRef.current}deg) rotateY(${rotationRef.current}deg)`;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleDragStart = useCallback(clientX => {
    lastInteractionRef.current = Date.now();
    isDraggingRef.current = true;
    velocityRef.current = 0;
    dragStartRef.current = clientX;
    initialRotationRef.current = rotationRef.current;
  }, []);

  const handleDragMove = useCallback(clientX => {
    if (!isDraggingRef.current) return;
    lastInteractionRef.current = Date.now();
    const deltaX = clientX - dragStartRef.current;
    const newRotation = initialRotationRef.current + deltaX * DRAG_SENSITIVITY;
    velocityRef.current = newRotation - rotationRef.current;
    rotationRef.current = newRotation;
  }, []);

  const handleDragEnd = useCallback(() => {
    isDraggingRef.current = false;
    lastInteractionRef.current = Date.now();
  }, []);

  const onMouseDown = e => handleDragStart(e.clientX);
  const onMouseMove = e => handleDragMove(e.clientX);
  const onTouchStart = e => handleDragStart(e.touches[0].clientX);
  const onTouchMove = e => handleDragMove(e.touches[0].clientX);

  const cards = useMemo(() => reviews.map((review, idx) => {
    const angle = idx * 360 / reviews.length;
    return {
      key: idx,
      review,
      transform: `rotateY(${angle}deg) translateZ(${radius}px)`
    };
  }), [reviews, radius]);

  return (
    <div 
      ref={parentRef} 
      className="w-full h-full flex items-center justify-center overflow-hidden font-sans cursor-grab active:cursor-grabbing" 
      style={{ userSelect: 'none' }} 
      onMouseDown={onMouseDown} 
      onMouseMove={onMouseMove} 
      onMouseUp={handleDragEnd} 
      onMouseLeave={handleDragEnd} 
      onTouchStart={onTouchStart} 
      onTouchMove={onTouchMove} 
      onTouchEnd={handleDragEnd}
    >
      <div 
        className="relative" 
        style={{
          perspective: 1500,
          perspectiveOrigin: 'center',
          width: Math.max(cardW * 1.5, radius * 2.2),
          height: Math.max(cardH * 1.8, radius * 1.5)
        }}
      >
        <div 
          ref={wheelRef} 
          className="relative" 
          style={{
            width: cardW,
            height: cardH,
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: -cardW / 2,
            marginTop: -cardH / 2
          }}
        >
          {cards.map(card => (
            <Card 
              key={card.key} 
              review={card.review} 
              transform={card.transform} 
              cardW={cardW} 
              cardH={cardH} 
            />
          ))}
        </div>
      </div>
    </div>
  );
});
ThreeDCarousel.displayName = 'ThreeDCarousel';

export default ThreeDCarousel;
