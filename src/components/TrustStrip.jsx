import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TRUST_ITEMS = [
  {
    icon: ShieldIcon,
    label: 'Licensed & Insured',
  },
  {
    icon: MapPinIcon,
    label: 'Brisbane Based',
  },
  {
    icon: TagIcon,
    label: 'Free Quotes',
  },
  {
    icon: BadgeCheckIcon,
    label: 'All Work Guaranteed',
  },
]

export default function TrustStrip() {
  const stripRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-trust-item]', {
        y: 16,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: stripRef.current,
          start: 'top 88%',
          once: true,
        },
      })
    }, stripRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={stripRef}
      style={{
        backgroundColor: '#111111',
        borderTop: '1px solid rgba(217,119,6,0.25)',
        borderBottom: '1px solid rgba(217,119,6,0.25)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderLeft: '1px solid rgba(255,255,255,0.05)' }}
        >
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              data-trust-item
              className="flex flex-col md:flex-row items-center justify-center gap-3"
              style={{
                padding: '28px 20px',
                borderRight: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(217,119,6,0.12)',
                  border: '1px solid rgba(217,119,6,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon />
              </div>
              <span
                style={{
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '0.01em',
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}
                className="md:text-left"
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Icons ────────────────────────────────────────────────── */
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function TagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function BadgeCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      <polyline points="9 12 11 14 15 10" strokeWidth="2" />
    </svg>
  )
}
