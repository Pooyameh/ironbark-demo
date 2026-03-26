import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SERVICES = [
  'Home Maintenance',
  'Commercial & Retail Maintenance',
  'Preventative Maintenance',
  'Minor Construction Services',
]

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-footer-col]', {
        y: 24,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 92%',
          once: true,
        },
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={footerRef}
      style={{
        backgroundColor: '#1a1a1a',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* ── Main footer columns ─────────────────────────── */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '72px 20px 48px',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* Col 1 — Brand */}
          <div data-footer-col>
            <a
              href="/"
              style={{ display: 'inline-block', marginBottom: '20px' }}
            >
              <img
                src="/ironbark-logo-white.png"
                alt="Ironbark Construction and Maintenance"
                style={{ height: '36px', width: 'auto' }}
              />
            </a>

            <p
              style={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: '14px',
                lineHeight: 1.7,
                marginBottom: '24px',
                maxWidth: '260px',
              }}
            >
              Quality construction, renovations, and maintenance delivered
              across Brisbane. Local and family owned.
            </p>

            {/* Phone — prominent in brand col */}
            <a
              href="tel:0411194039"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#D97706',
                fontSize: '15px',
                fontWeight: '700',
                letterSpacing: '0.01em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F59E0B')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#D97706')}
            >
              <PhoneIcon />
              0411 194 039
            </a>
          </div>

          {/* Col 2 — Contact */}
          <div data-footer-col>
            <h3
              style={{
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Contact
            </h3>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li>
                <a
                  href="tel:0411194039"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '14px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  <ContactIcon type="phone" />
                  0411 194 039
                </a>
              </li>
              <li>
                <a
                  href="mailto:ironbarkcm@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '14px',
                    transition: 'color 0.2s',
                    wordBreak: 'break-all',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  <ContactIcon type="mail" />
                  ironbarkcm@gmail.com
                </a>
              </li>
              <li>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '14px',
                  }}
                >
                  <ContactIcon type="location" />
                  Servicing all of Brisbane
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div data-footer-col>
            <h3
              style={{
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Services
            </h3>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'rgba(255,255,255,0.55)',
                      fontSize: '14px',
                      lineHeight: 1.4,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#D97706',
                        flexShrink: 0,
                        marginTop: '1px',
                      }}
                    />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────── */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '20px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <span
            style={{
              color: 'rgba(255,255,255,0.25)',
              fontSize: '13px',
            }}
          >
            © {new Date().getFullYear()} Ironbark Construction and Maintenance. All rights reserved.
          </span>

          <a
            href="https://luxcoda.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'rgba(255,255,255,0.25)',
              fontSize: '13px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#D97706')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
          >
            Website by Luxcoda
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ── Icons ────────────────────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
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

function ContactIcon({ type }) {
  if (type === 'phone') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(217,119,6,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.86 5.86l.81-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }
  if (type === 'mail') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(217,119,6,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(217,119,6,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
