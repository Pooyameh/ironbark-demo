import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const REVIEWS = [
  {
    name: 'Teddi Buckley',
    text: "Excellent service! He was easy to communicate with, very professional, and did an awesome job fixing everything we needed. I'd happily recommend him to anyone looking for a reliable handyman.",
    stars: 5,
  },
  {
    name: 'Harmony Bramich',
    text: 'The team was professional, efficient, and delivered quality work. Highly recommend and would definitely use again.',
    stars: 5,
    featured: true,
  },
  {
    name: 'Jared Shaw',
    text: 'Reliable and professional did an excellent job with my shed cheers',
    stars: 5,
  },
]

export default function Reviews() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-reviews-header]', {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          once: true,
        },
      })

      gsap.from('[data-review-card]', {
        y: 36,
        opacity: 0,
        duration: 0.65,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-reviews-grid]',
          start: 'top 86%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="reviews"
      ref={sectionRef}
      style={{
        backgroundColor: '#1a1a1a',
        padding: '96px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle amber radial glow — top centre */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(217,119,6,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>

        {/* ── Section header ─────────────────────────────── */}
        <div
          data-reviews-header
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span
            style={{
              display: 'inline-block',
              color: '#D97706',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            Reviews
          </span>
          <h2
            style={{
              color: '#ffffff',
              fontSize: 'clamp(28px, 5vw, 46px)',
              fontWeight: '700',
              letterSpacing: '-0.022em',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            What Our Clients Say
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', lineHeight: 1.6 }}>
            Real reviews from real Brisbane customers.
          </p>
        </div>

        {/* ── Cards grid ─────────────────────────────────── */}
        {/* No alignItems override — grid default stretch makes all cards equal height */}
        <div
          data-reviews-grid
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '20px' }}
        >
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {/* Google attribution */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '40px',
            color: 'rgba(255,255,255,0.25)',
            fontSize: '13px',
            letterSpacing: '0.02em',
          }}
        >
          ★★★★★ 5.0 · Google Reviews
        </p>
      </div>
    </section>
  )
}

/* ── Review card ─────────────────────────────────────────── */
function ReviewCard({ review }) {
  const { name, text, stars, featured } = review

  return (
    <div
      data-review-card
      style={{
        backgroundColor: featured ? '#242220' : 'rgba(255,255,255,0.04)',
        border: featured
          ? '1px solid rgba(217,119,6,0.3)'
          : '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        padding: '32px',
        position: 'relative',
        /* flex column so reviewer info is always pinned to bottom */
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Large decorative quote mark */}
      <div
        aria-hidden="true"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '72px',
          lineHeight: 1,
          color: '#D97706',
          opacity: featured ? 0.7 : 0.3,
          marginBottom: '-16px',
          marginLeft: '-4px',
          userSelect: 'none',
        }}
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
        {Array.from({ length: stars }).map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#D97706"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      {/* Review text — flex:1 pushes footer to bottom */}
      <p
        style={{
          color: featured ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)',
          fontSize: '15px',
          fontStyle: 'italic',
          lineHeight: 1.7,
          marginBottom: '24px',
          flex: 1,
        }}
      >
        {text}
      </p>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          backgroundColor: featured
            ? 'rgba(217,119,6,0.2)'
            : 'rgba(255,255,255,0.08)',
          marginBottom: '18px',
        }}
      />

      {/* Reviewer name — always at bottom */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: featured
              ? 'rgba(217,119,6,0.18)'
              : 'rgba(255,255,255,0.07)',
            border: featured
              ? '1px solid rgba(217,119,6,0.3)'
              : '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              color: featured ? '#D97706' : 'rgba(255,255,255,0.5)',
              fontSize: '13px',
              fontWeight: '700',
            }}
          >
            {name.charAt(0)}
          </span>
        </div>

        <div>
          <span
            style={{
              display: 'block',
              color: featured ? '#D97706' : '#ffffff',
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '0.01em',
            }}
          >
            {name}
          </span>
          <span
            style={{
              display: 'block',
              color: 'rgba(255,255,255,0.3)',
              fontSize: '12px',
              letterSpacing: '0.02em',
            }}
          >
            Google Review
          </span>
        </div>
      </div>
    </div>
  )
}
