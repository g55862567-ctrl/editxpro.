import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: EditXPro,
})

const WA_LINK = 'https://wa.me/918810556825'
const IG_LINK = 'https://instagram.com/editx._.pro'

const PORTFOLIO = [
  {
    id: 'sQKqkQ0q_XM',
    category: 'Travel Vlog',
    title: 'Adventure in Bali — Cinematic Travel Edit',
    desc: 'Colour-graded travel vlog with dynamic transitions and ambient audio design.',
  },
  {
    id: '0XY9tePrHvs',
    category: 'Artist Promo',
    title: 'Music Video — Artist Promo Cut',
    desc: 'High-energy music video edit with beat-synced cuts and motion overlays.',
  },
  {
    id: 'LvHDT0ZxSmw',
    category: 'Brand Commercial',
    title: 'Premium Brand Commercial',
    desc: '60-second product commercial with professional grade colour work.',
  },
  {
    id: 'z20bDbMvUhc',
    category: 'Viral Reels',
    title: 'Viral Reels Pack — Social Media',
    desc: 'Scroll-stopping short-form content edited for maximum retention.',
  },
  {
    id: 'w_Epv0DBAiE',
    category: 'Podcast Edit',
    title: 'Full Podcast Show Edit',
    desc: 'Talking-head podcast with L-cuts, B-roll, and branded lower thirds.',
  },
  {
    id: 'W9Mfi4Mv9R0',
    category: 'Motion Graphics',
    title: 'Animated Explainer Video',
    desc: 'Custom animated explainer with kinetic typography and brand motion kit.',
  },
]

const RAW_VS_FINAL_REEL = 'https://www.instagram.com/reel/DXBtFM2CeRS/'

const REVIEWS = [
  { initials: 'JM', name: 'Jake Morrison', flag: '🇺🇸', country: 'USA', quote: 'EditX Pro completely transformed my YouTube channel. The edits are absolutely cinematic — my views doubled within two months of working with them.' },
  { initials: 'SK', name: 'Sophia Karlsson', flag: '🇸🇪', country: 'Sweden', quote: "Best editing service I've ever used. They understood my brand aesthetic immediately and delivered ahead of schedule every single time." },
  { initials: 'RV', name: 'Rahul Verma', flag: '🇮🇳', country: 'India', quote: 'My reels started going viral after they took over editing. The team is incredibly responsive and quality is consistently top-tier.' },
  { initials: 'AC', name: 'Aisha Carter', flag: '🇬🇧', country: 'UK', quote: 'Hired them for a product ad and the results blew our whole team away. Will absolutely be working with EditX Pro on every future campaign.' },
  { initials: 'TN', name: 'Tyler Nguyen', flag: '🇺🇸', country: 'USA', quote: 'Fast, talented, and genuinely passionate about video. Our podcast viewership jumped 40% after their edits. Cannot recommend highly enough.' },
  { initials: 'PG', name: 'Priya Gupta', flag: '🇮🇳', country: 'India', quote: 'Professional, affordable, and always open to revisions. My fashion reels have never looked better — EditX Pro is the real deal.' },
]

const WHY = [
  { icon: '⚡', title: '24-Hour Delivery', desc: 'Rush turnarounds completed within 24 hours without sacrificing an ounce of quality.' },
  { icon: '💎', title: 'Premium Quality', desc: 'Hollywood-grade colour grading, seamless transitions, and polished sound design.' },
  { icon: '💸', title: 'Affordable Pricing', desc: 'Agency-level output at freelancer prices. Get more value for every dollar spent.' },
  { icon: '♾️', title: 'Unlimited Revisions', desc: "We iterate until you're 100% happy — no cap on feedback rounds." },
  { icon: '🌐', title: 'Trusted Globally', desc: '200+ satisfied clients from the USA, UK, Sweden, India and beyond.' },
  { icon: '🎧', title: 'Dedicated Support', desc: 'Direct WhatsApp access to your editor throughout the entire project.' },
]

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0
            setTimeout(() => el.classList.add('visible'), delay * 1000)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Array<{ x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string }> = []

    const colors = ['rgba(123,47,247,', 'rgba(168,85,247,', 'rgba(0,212,255,', 'rgba(14,165,233,']

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const init = () => {
      resize()
      particles = Array.from({ length: 70 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${p.alpha})`
        ctx.fill()
      })

      // Draw lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(123,47,247,${0.08 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    init()
    draw()

    const ro = new ResizeObserver(init)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} id="particle-canvas" />
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Portfolio', 'Gallery', 'Reviews', 'Contact']

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          <span className="logo-icon">E</span>
          <span className="grad-text">EditX Pro</span>
        </a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(l) }}>{l}</a>
            </li>
          ))}
        </ul>

        <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary nav-cta">
          <WhatsAppIcon size={15} />
          Get Started
        </a>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(l) }}>{l}</a>
        ))}
        <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
          <WhatsAppIcon size={15} />
          Get Started
        </a>
      </div>
    </>
  )
}

function HeroSection() {
  return (
    <section className="hero" id="home">
      <ParticleCanvas />
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="badge-label reveal" data-delay="0">
          <span className="dot" />
          Premium Video Editing Studio
        </div>

        <h1 className="reveal" data-delay="0.1">
          We Turn Your Videos Into<br />
          <span className="grad-text">Viral Content</span>
        </h1>

        <p className="hero-sub reveal" data-delay="0.2">
          Professional video editing for YouTube creators, brands, and agencies.
          Trusted by <strong>200+ clients</strong> across USA &amp; India — delivering cinematic
          quality with lightning-fast turnaround.
        </p>

        <div className="hero-ctas reveal" data-delay="0.3">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp">
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
          <a href={IG_LINK} target="_blank" rel="noreferrer" className="btn-instagram">
            <InstagramIcon />
            @editx._.pro
          </a>
        </div>

        <div className="hero-stats reveal" data-delay="0.4">
          {[
            { value: '200+', label: 'Happy Clients' },
            { value: '1500+', label: 'Videos Edited' },
            { value: '24hr', label: 'Delivery' },
            { value: '5★', label: 'Avg Rating' },
          ].map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const services = [
    { icon: '🎬', title: 'YouTube Editing', desc: 'Long-form edits with chapters, pacing, and audience retention in mind.' },
    { icon: '📱', title: 'Reels & Shorts', desc: 'Vertical short-form content optimised for TikTok, Reels, and YouTube Shorts.' },
    { icon: '✨', title: 'Motion Graphics', desc: 'Custom animated titles, lower thirds, transitions, and logo stings.' },
    { icon: '📢', title: 'Ads Editing', desc: 'High-converting ad creatives for Meta, Google, and YouTube pre-rolls.' },
  ]

  return (
    <section id="about" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className="about-grid">
          <div className="about-brand">
            <span className="section-tag reveal">Our Story</span>
            <h2 className="section-title reveal" data-delay="0.05">
              Crafting Visual Stories<br />
              <span className="grad-text">Since 2021</span>
            </h2>
            <div className="section-divider reveal" data-delay="0.08" />
            <div className="reveal" data-delay="0.1">
              <p>
                EditX Pro was born from a simple belief: every creator deserves world-class
                editing without the world-class price tag. Starting with a single editor and
                a borrowed laptop, we've grown into a full-service post-production studio
                trusted by YouTubers, e-commerce brands, and ad agencies across two continents.
              </p>
              <p>
                We don't just cut footage — we craft narratives. Every colour grade, every
                transition, every music choice is intentional. Our editors have shipped over
                <strong> 1,500 videos</strong>, racking up hundreds of millions of combined
                views for our clients.
              </p>
              <p>
                Whether you need a cinematic travel vlog, a viral 30-second reel, or a
                conversion-focused ad, we bring the same obsessive attention to detail to
                every single project.
              </p>
            </div>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.title} className={`glass-card service-card reveal`} data-delay={`${0.1 + i * 0.08}`}>
                <div className="service-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PortfolioCard({ item, index }: { item: typeof PORTFOLIO[0]; index: number }) {
  const [imgSrc, setImgSrc] = useState(
    `https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`
  )

  return (
    <div
      className="portfolio-card reveal"
      data-delay={`${index * 0.07}`}
    >
      <a
        href={`https://www.youtube.com/watch?v=${item.id}`}
        target="_blank"
        rel="noreferrer"
        className="portfolio-thumb"
        style={{ display: 'block', paddingTop: '56.25%', position: 'relative' }}
      >
        <img
          src={imgSrc}
          alt={item.title}
          onError={() => setImgSrc(`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
        />
        <div className="play-overlay">
          <div className="play-btn">
            <PlayIcon />
          </div>
        </div>
      </a>
      <div className="portfolio-info">
        <span className="category-tag">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </div>
  )
}

function PortfolioSection() {
  return (
    <section id="portfolio">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag reveal">Our Work</span>
          <h2 className="section-title reveal" data-delay="0.05">
            Work That Speaks<br />
            <span className="grad-text">For Itself</span>
          </h2>
          <div className="section-divider reveal" data-delay="0.08" style={{ margin: '1rem auto 1.5rem' }} />
          <p className="section-desc reveal" data-delay="0.1" style={{ margin: '0 auto' }}>
            A curated selection of recent projects spanning travel, music, brands, and social media.
          </p>
        </div>

        <div className="portfolio-grid">
          {PORTFOLIO.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  return (
    <section id="gallery" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag reveal">Transformations</span>
          <h2 className="section-title reveal" data-delay="0.05">
            Raw vs Final<br />
            <span className="grad-text">The EditX Effect</span>
          </h2>
          <div className="section-divider reveal" data-delay="0.08" style={{ margin: '1rem auto 1.5rem' }} />
          <p className="section-desc reveal" data-delay="0.1" style={{ margin: '0 auto' }}>
            Raw footage goes in, viral-worthy content comes out. Every time.
          </p>
        </div>

        <div className="raw-vs-final reveal" data-delay="0.15" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="glass-card" style={{ overflow: 'hidden', borderRadius: '1rem', maxWidth: 480, width: '100%' }}>
            <iframe
              src="https://www.instagram.com/reel/DXBtFM2CeRS/embed"
              style={{ width: '100%', minHeight: 680, border: 'none', background: 'transparent' }}
              allowFullScreen
              title="Raw vs Final — EditX Pro Transformation"
            />
          </div>
        </div>

        <div className="reveal" data-delay="0.25" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a
            href={RAW_VS_FINAL_REEL}
            target="_blank"
            rel="noreferrer"
            className="btn-instagram"
            style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}
          >
            <InstagramIcon size={18} />
            Watch on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

function ReviewsSection() {
  return (
    <section id="reviews">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag reveal">Testimonials</span>
          <h2 className="section-title reveal" data-delay="0.05">
            Clients Love<br />
            <span className="grad-text">What We Deliver</span>
          </h2>
          <div className="section-divider reveal" data-delay="0.08" style={{ margin: '1rem auto 1.5rem' }} />
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <div key={r.name} className={`glass-card review-card reveal`} data-delay={`${i * 0.08}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="reviewer-info">
                  <div className="reviewer-avatar">{r.initials}</div>
                  <div>
                    <div className="reviewer-name">{r.name}</div>
                    <div className="reviewer-country">{r.flag} {r.country}</div>
                  </div>
                </div>
                <div className="stars">
                  {[...Array(5)].map((_, si) => <StarIcon key={si} />)}
                </div>
              </div>
              <p className="review-quote">"{r.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhySection() {
  return (
    <section style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag reveal">Why Us</span>
          <h2 className="section-title reveal" data-delay="0.05">
            Why Choose<br />
            <span className="grad-text">EditX Pro?</span>
          </h2>
          <div className="section-divider reveal" data-delay="0.08" style={{ margin: '1rem auto 1.5rem' }} />
        </div>

        <div className="why-grid">
          {WHY.map((w, i) => (
            <div key={w.title} className={`glass-card why-card reveal`} data-delay={`${i * 0.07}`}>
              <div className="why-icon">{w.icon}</div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-tag reveal">Contact</span>
          <h2 className="section-title reveal" data-delay="0.05">
            Ready to Go<br />
            <span className="grad-text">Viral?</span>
          </h2>
          <div className="section-divider reveal" data-delay="0.08" style={{ margin: '1rem auto 1.5rem' }} />
          <p className="section-desc reveal" data-delay="0.1" style={{ margin: '0 auto' }}>
            Reach out on WhatsApp or slide into our DMs. We typically respond within 30 minutes.
          </p>

          <div className="contact-btns reveal" data-delay="0.2">
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="contact-btn whatsapp">
              <WhatsAppIcon size={24} />
              WhatsApp Us
            </a>
            <a href={IG_LINK} target="_blank" rel="noreferrer" className="contact-btn instagram">
              <InstagramIcon size={24} />
              Instagram DM
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">
        <span className="logo-icon" style={{
          width: 32, height: 32,
          background: 'linear-gradient(135deg, #7b2ff7, #00d4ff)',
          borderRadius: 8,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.9rem',
          fontWeight: 900,
          color: 'white',
          marginRight: '0.4rem',
        }}>E</span>
        <span className="grad-text">EditX Pro</span>
      </a>
      <p className="footer-tagline">Turning Raw Footage Into Viral Stories — Since 2021</p>

      <div className="social-icons">
        <a href={WA_LINK} target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
          <WhatsAppIcon size={18} />
        </a>
        <a href={IG_LINK} target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
          <InstagramIcon size={18} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="YouTube">
          <YouTubeIcon />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
          <TwitterIcon />
        </a>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} EditX Pro. All rights reserved.</p>
    </footer>
  )
}

function EditXPro() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <GallerySection />
        <ReviewsSection />
        <WhySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
