import { useState, useEffect, useCallback } from 'react'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#1a1a1a',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.5)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* ── Main bar ─────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 20px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <img
            src="/ironbark-logo-white.png"
            alt="Ironbark Construction and Maintenance"
            style={{ height: '38px', width: 'auto' }}
          />
        </a>

        {/* Desktop nav links — hidden below md */}
        <ul
          className="hidden md:flex"
          style={{ gap: '36px', alignItems: 'center' }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '15px',
                  fontWeight: '500',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.75)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Phone — always visible */}
          <a
            href="tel:0411194039"
            style={{
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
            }}
          >
            0411 194 039
          </a>

          {/* Get a Quote CTA — desktop only */}
          <a
            href="#contact"
            className="hidden md:inline-flex"
            style={{
              backgroundColor: '#D97706',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '700',
              padding: '10px 20px',
              borderRadius: '6px',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#B45309')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#D97706')}
          >
            Get a Quote
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            style={{
              width: '44px',
              height: '44px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#ffffff',
                borderRadius: '2px',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#ffffff',
                borderRadius: '2px',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                opacity: isOpen ? 0 : 1,
                transform: isOpen ? 'scaleX(0)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#ffffff',
                borderRadius: '2px',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown menu ──────────────────────────── */}
      {/* visibility:hidden (not display:none) so transforms animate */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        style={{
          visibility: isOpen ? 'visible' : 'hidden',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'visibility 0.3s, opacity 0.3s, transform 0.3s ease',
          backgroundColor: '#1a1a1a',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          position: 'absolute',
          top: '68px',
          left: 0,
          right: 0,
        }}
      >
        <ul style={{ padding: '8px 20px 4px' }}>
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              style={{
                borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              <a
                href={link.href}
                onClick={closeMenu}
                style={{
                  display: 'block',
                  color: '#ffffff',
                  fontSize: '18px',
                  fontWeight: '600',
                  padding: '16px 0',
                  letterSpacing: '-0.01em',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div style={{ padding: '16px 20px 24px' }}>
          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              display: 'block',
              textAlign: 'center',
              backgroundColor: '#D97706',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: '700',
              padding: '16px 24px',
              borderRadius: '6px',
              letterSpacing: '0.01em',
            }}
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </nav>
  )
}
