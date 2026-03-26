import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.25 })

      tl.from('[data-hero="eyebrow"]', {
        y: 20,
        opacity: 0,
        duration: 0.65,
        ease: 'power2.out',
      })
        .from(
          '[data-hero="headline"]',
          { y: 32, opacity: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.4'
        )
        .from(
          '[data-hero="sub"]',
          { y: 22, opacity: 0, duration: 0.65, ease: 'power2.out' },
          '-=0.45'
        )
        .from(
          '[data-hero="buttons"]',
          { y: 18, opacity: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        )
        .from(
          '[data-hero="review"]',
          { y: 18, opacity: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.35'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#1a1a1a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        overflow: 'hidden',
      }}
    >
      {/* Warm amber gradient glow — gives depth without imagery */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 72% 30%, rgba(217,119,6,0.13) 0%, transparent 58%)',
          pointerEvents: 'none',
        }}
      />

      {/* Very subtle grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      {/* ── Content ─────────────────────────────────────── */}
      <div
        className="relative z-10 w-full flex flex-col items-center md:items-start"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '104px 20px 80px',
          width: '100%',
        }}
      >
        {/* Eyebrow pill */}
        <div
          data-hero="eyebrow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(217,119,6,0.12)',
            border: '1px solid rgba(217,119,6,0.28)',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '28px',
          }}
        >
          <span
            style={{
              color: '#D97706',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
            }}
          >
            Local &amp; Family Owned · Brisbane
          </span>
        </div>

        {/* Headline */}
        <h1
          data-hero="headline"
          className="text-center md:text-left"
          style={{
            color: '#ffffff',
            fontSize: 'clamp(40px, 9.5vw, 74px)',
            fontWeight: '700',
            lineHeight: 1.04,
            letterSpacing: '-0.025em',
            marginBottom: '24px',
            maxWidth: '820px',
          }}
        >
          Brisbane Builders<br />You Can Trust
        </h1>

        {/* Subheadline */}
        <p
          data-hero="sub"
          className="text-center md:text-left"
          style={{
            color: 'rgba(255,255,255,0.68)',
            fontSize: 'clamp(15px, 2.4vw, 18px)',
            fontWeight: '400',
            lineHeight: 1.65,
            marginBottom: '40px',
            maxWidth: '520px',
          }}
        >
          Quality construction, renovations, and maintenance — delivered on time,
          on budget, and built to last.
        </p>

        {/* CTA Buttons */}
        <div
          data-hero="buttons"
          className="flex flex-col md:flex-row gap-3 w-full md:w-auto"
          style={{ maxWidth: '340px', marginBottom: '52px' }}
        >
          {/* Primary — amber */}
          <a
            href="tel:0411194039"
            className="flex items-center justify-center gap-2 rounded-md font-bold transition-colors duration-200"
            style={{
              backgroundColor: '#D97706',
              color: '#ffffff',
              fontSize: '15px',
              padding: '16px 28px',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#B45309')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#D97706')}
          >
            <PhoneIcon />
            Call Now
          </a>

          {/* Secondary — outline */}
          <a
            href="#contact"
            className="flex items-center justify-center rounded-md font-semibold transition-all duration-200"
            style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              fontSize: '15px',
              padding: '15px 28px',
              border: '1.5px solid rgba(255,255,255,0.28)',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            Get a Free Quote
          </a>
        </div>

        {/* Inline review badge */}
        <div
          data-hero="review"
          className="flex flex-col items-center md:items-start gap-2 w-full"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.09)',
            paddingTop: '28px',
            maxWidth: '480px',
          }}
        >
          {/* Stars */}
          <div style={{ display: 'flex', gap: '3px' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>

          {/* Quote */}
          <p
            className="text-center md:text-left"
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '14px',
              fontStyle: 'italic',
              lineHeight: 1.55,
            }}
          >
            "Excellent service! He was easy to communicate with, very professional,
            and did an awesome job fixing everything we needed."
          </p>

          {/* Reviewer */}
          <span
            style={{
              color: '#D97706',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.02em',
            }}
          >
            — Teddi Buckley · ★★★★★ Google Review
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1"
        style={{ color: 'rgba(255,255,255,0.25)' }}
        aria-hidden="true"
      >
        <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDownIcon />
      </div>
    </section>
  )
}

/* ── Icons ────────────────────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.86 5.86l.81-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="#D97706"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
