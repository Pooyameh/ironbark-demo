import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function CTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-cta-content] > *', {
        y: 28,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        backgroundColor: '#111111',
        borderTop: '3px solid #D97706',
        padding: '96px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow — warm centre */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(217,119,6,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        data-cta-content
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0',
        }}
      >
        {/* Eyebrow */}
        <span
          style={{
            display: 'inline-block',
            color: '#D97706',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          Get In Touch
        </span>

        {/* Headline */}
        <h2
          style={{
            color: '#ffffff',
            fontSize: 'clamp(30px, 6vw, 52px)',
            fontWeight: '700',
            letterSpacing: '-0.022em',
            lineHeight: 1.08,
            marginBottom: '18px',
          }}
        >
          Ready to Get Started?
        </h2>

        {/* Subline */}
        <p
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '16px',
            lineHeight: 1.6,
            marginBottom: '48px',
            maxWidth: '420px',
          }}
        >
          Call us for a free, no-obligation quote. We service all of Brisbane.
        </p>

        {/* Large phone number — the centrepiece */}
        <a
          href="tel:0411194039"
          style={{
            display: 'block',
            color: '#ffffff',
            fontSize: 'clamp(36px, 8vw, 64px)',
            fontWeight: '700',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            marginBottom: '36px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#D97706')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
        >
          0411 194 039
        </a>

        {/* CTA button */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            width: '100%',
            maxWidth: '320px',
            marginBottom: '40px',
          }}
          className="sm:flex-row sm:max-w-none sm:w-auto sm:justify-center"
        >
          <a
            href="mailto:ironbarkcm@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: '#D97706',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: '700',
              padding: '16px 32px',
              borderRadius: '6px',
              letterSpacing: '0.01em',
              width: '100%',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#B45309')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#D97706')}
            className="sm:w-auto"
          >
            <MailIcon />
            Get a Free Quote
          </a>

          <a
            href="tel:0411194039"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: 'transparent',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: '600',
              padding: '15px 32px',
              borderRadius: '6px',
              border: '1.5px solid rgba(255,255,255,0.25)',
              letterSpacing: '0.01em',
              width: '100%',
              transition: 'border-color 0.2s, background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
            className="sm:w-auto"
          >
            <PhoneIcon />
            Call Now
          </a>
        </div>

        {/* Trust micro-line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px 20px',
            color: 'rgba(255,255,255,0.3)',
            fontSize: '13px',
            letterSpacing: '0.02em',
          }}
        >
          {['Free quote', 'No obligation', 'Licensed & insured', 'All of Brisbane'].map(
            (item, i, arr) => (
              <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#D97706', fontSize: '11px' }}>✓</span>
                {item}
                {i < arr.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.1)', marginLeft: '0px' }}>·</span>
                )}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}

/* ── Icons ────────────────────────────────────────────────── */
function MailIcon() {
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

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
