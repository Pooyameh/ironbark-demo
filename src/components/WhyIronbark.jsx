import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const POINTS = [
  {
    label: 'Owner on every job site',
    detail: 'You deal directly with the person doing the work. No middlemen, no surprises.',
  },
  {
    label: 'Clear upfront quoting',
    detail: "Know exactly what you're paying before any work begins. No hidden costs.",
  },
  {
    label: 'Fully licensed and insured',
    detail: 'All work meets Australian standards, with full insurance for your peace of mind.',
  },
  {
    label: 'Clean respectful work',
    detail: 'We treat your home or business with care and leave the site tidy every time.',
  },
]

export default function WhyIronbark() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image column slides in from the left
      gsap.from('[data-why-image]', {
        x: -32,
        opacity: 0,
        duration: 0.85,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })

      // Text block fades up
      gsap.from('[data-why-eyebrow], [data-why-headline], [data-why-intro]', {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-why-text]',
          start: 'top 82%',
          once: true,
        },
      })

      // Bullet points stagger in
      gsap.from('[data-why-point]', {
        y: 20,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-why-points]',
          start: 'top 85%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{ backgroundColor: '#FAFAF8', padding: '96px 20px' }}
    >
      <div
        style={{ maxWidth: '1280px', margin: '0 auto' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
      >

        {/* ── Image placeholder ─────────────────────────── */}
        <div data-why-image>
          <div
            className="w-full"
            style={{
              backgroundColor: '#232320',
              borderRadius: '14px',
              aspectRatio: '16/10',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle cross-hatch texture */}
            <svg
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                opacity: 0.04,
              }}
            >
              <defs>
                <pattern id="hatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="12" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hatch)" />
            </svg>

            {/* Amber corner accent — top left */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                width: '28px',
                height: '28px',
                borderTop: '2px solid rgba(217,119,6,0.5)',
                borderLeft: '2px solid rgba(217,119,6,0.5)',
                borderRadius: '2px 0 0 0',
              }}
            />
            {/* Amber corner accent — bottom right */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '28px',
                height: '28px',
                borderBottom: '2px solid rgba(217,119,6,0.5)',
                borderRight: '2px solid rgba(217,119,6,0.5)',
                borderRadius: '0 0 2px 0',
              }}
            />

            {/* Icon */}
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ImageIcon />
            </div>

            <span
              style={{
                color: 'rgba(255,255,255,0.35)',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Project Photo
            </span>
          </div>
        </div>

        {/* ── Text content ───────────────────────────────── */}
        <div data-why-text style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

          <span
            data-why-eyebrow
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
            Why Choose Us
          </span>

          <h2
            data-why-headline
            style={{
              color: '#1a1a1a',
              fontSize: 'clamp(28px, 4.5vw, 44px)',
              fontWeight: '700',
              letterSpacing: '-0.022em',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Why Brisbane Trusts Ironbark
          </h2>

          <p
            data-why-intro
            style={{
              color: '#6B7280',
              fontSize: '16px',
              lineHeight: 1.65,
              marginBottom: '36px',
            }}
          >
            We're a family-owned business that takes real pride in every job.
            When you call Ironbark, you get the owner — not a subcontractor.
          </p>

          {/* Bullet points */}
          <ul
            data-why-points
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {POINTS.map(({ label, detail }) => (
              <li
                key={label}
                data-why-point
                style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}
              >
                {/* Check icon */}
                <div
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(217,119,6,0.1)',
                    border: '1.5px solid rgba(217,119,6,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '1px',
                  }}
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D97706"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <div>
                  <span
                    style={{
                      display: 'block',
                      color: '#1a1a1a',
                      fontSize: '15px',
                      fontWeight: '700',
                      lineHeight: 1.3,
                      marginBottom: '3px',
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      color: '#6B7280',
                      fontSize: '14px',
                      lineHeight: 1.55,
                    }}
                  >
                    {detail}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ── Icons ────────────────────────────────────────────────── */
function ImageIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  )
}
