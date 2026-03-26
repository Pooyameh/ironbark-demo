import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SERVICES = [
  {
    icon: HomeIcon,
    name: 'Home Maintenance',
    description:
      'Comprehensive residential maintenance keeping your home safe, functional, and beautiful. From small repairs to ongoing upkeep — done properly, the first time.',
  },
  {
    icon: BuildingIcon,
    name: 'Commercial & Retail Maintenance',
    description:
      'Full-spectrum maintenance, repair, and upkeep for commercial properties. We minimise downtime and protect your investment with reliable, professional service.',
  },
  {
    icon: ClockShieldIcon,
    name: 'Preventative Maintenance',
    description:
      'Proactive maintenance programs designed to catch problems before they become costly repairs. Plan ahead, stay ahead, and save money in the long run.',
  },
  {
    icon: HammerIcon,
    name: 'Minor Construction Services',
    description:
      'Small builds, renovations, repairs, and structural work carried out with care. Quality workmanship on every job, regardless of size.',
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-services-header]', {
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

      gsap.from('[data-service-card]', {
        y: 36,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-service-grid]',
          start: 'top 86%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ backgroundColor: '#FAFAF8', padding: '96px 20px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* ── Section header ─────────────────────────────── */}
        <div
          data-services-header
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
            What We Do
          </span>
          <h2
            style={{
              color: '#1a1a1a',
              fontSize: 'clamp(30px, 5vw, 48px)',
              fontWeight: '700',
              letterSpacing: '-0.022em',
              lineHeight: 1.08,
              marginBottom: '18px',
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              color: '#6B7280',
              fontSize: '16px',
              lineHeight: 1.65,
              maxWidth: '460px',
              margin: '0 auto',
            }}
          >
            Residential, commercial, preventative, and construction — one trusted team for all of it.
          </p>
        </div>

        {/* ── Cards grid ─────────────────────────────────── */}
        <div
          data-service-grid
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ gap: '20px' }}
        >
          {SERVICES.map(({ icon: Icon, name, description }) => (
            <ServiceCard key={name} Icon={Icon} name={name} description={description} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Card ─────────────────────────────────────────────────── */
function ServiceCard({ Icon, name, description }) {
  return (
    <div
      data-service-card
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #EAEAE8',
        borderLeft: '3px solid rgba(217,119,6,0.2)',
        borderRadius: '10px',
        padding: '32px',
        transition: 'transform 0.28s ease, box-shadow 0.28s ease, border-left-color 0.28s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.08)'
        e.currentTarget.style.borderLeftColor = '#D97706'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderLeftColor = 'rgba(217,119,6,0.2)'
      }}
    >
      {/* Icon badge */}
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '12px',
          backgroundColor: 'rgba(217,119,6,0.09)',
          border: '1px solid rgba(217,119,6,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '22px',
        }}
      >
        <Icon />
      </div>

      <h3
        style={{
          color: '#1a1a1a',
          fontSize: '18px',
          fontWeight: '700',
          letterSpacing: '-0.015em',
          lineHeight: 1.2,
          marginBottom: '12px',
        }}
      >
        {name}
      </h3>

      <p
        style={{
          color: '#6B7280',
          fontSize: '15px',
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>
    </div>
  )
}

/* ── Icons ────────────────────────────────────────────────── */
function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
      <rect x="12" y="13" width="4" height="3" rx="0.5" />
      <rect x="5" y="13" width="2" height="2" rx="0.5" />
      <rect x="5" y="5" width="2" height="2" rx="0.5" />
      <rect x="10" y="5" width="2" height="2" rx="0.5" />
      <rect x="15" y="5" width="2" height="2" rx="0.5" />
    </svg>
  )
}

function ClockShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      <polyline points="12 7 12 12 15 14" strokeWidth="1.8" />
    </svg>
  )
}

function HammerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
      <path d="M17.64 15L22 10.64" />
      <path d="M20.91 11.7l-1.25-1.25c.96-2.3.5-5.05-1.41-6.95-1.4-1.4-3.26-2.06-5.12-1.99L15 4l-3 3 1.5 1.5" />
    </svg>
  )
}
