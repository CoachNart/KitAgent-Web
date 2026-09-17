(() => {
  const style = document.createElement('style')
  style.id = 'kitsetups-runtime-fixes'
  style.textContent = `
    @media (max-width: 760px) {
      .landing-page .feature-grid { grid-template-columns: 1fr !important; gap: 6px !important; }
      .landing-page .feature-card { min-height: 0 !important; height: auto !important; margin: 0 !important; padding: 0 !important; }
      .landing-page .card-media { height: 128px !important; }
      .landing-page .card-body { flex: 0 0 auto !important; padding: 14px 15px 15px !important; }
      .landing-page .feature-card .card-title { margin-top: 8px !important; font-size: 17px !important; }
      .landing-page .feature-card p { margin-top: 7px !important; line-height: 1.55 !important; }
      .landing-page .feature-card button { margin-top: 13px !important; }
      .landing-page .feature-card.scroll-reveal { transform: none !important; }
      .landing-page .features-section { padding-top: 64px !important; padding-bottom: 64px !important; }
      .landing-page .section-heading { margin-bottom: 22px !important; }
      .landing-page .landing-hero { min-height: 0 !important; height: auto !important; padding: 30px 18px 34px !important; justify-content: flex-start !important; }
      .landing-page .hero-copy { width: 100% !important; transform: none !important; margin: 0 auto !important; }
      .landing-page .hero-copy h1 { margin-bottom: 17px !important; }
      .landing-page .hero-copy p { max-width: 620px !important; }
      .landing-page .hero-copy .hero-button { margin-top: 20px !important; }
      .landing-page .hero-photo { min-height: 0 !important; height: 100% !important; }
    }
    @media (max-width: 560px) {
      .landing-page .landing-hero { padding: 26px 16px 32px !important; }
      .landing-page .hero-copy h1 { font-size: clamp(48px, 14vw, 72px) !important; line-height: .9 !important; margin-bottom: 16px !important; }
      .landing-page .hero-copy p { font-size: 12px !important; line-height: 1.65 !important; }
      .landing-page .hero-copy .hero-button { margin-top: 19px !important; }
    }
  `
  const mount = () => { if (!document.getElementById('kitsetups-runtime-fixes')) document.body.appendChild(style) }
  if (document.body) mount()
  else document.addEventListener('DOMContentLoaded', mount, { once: true })
})()
