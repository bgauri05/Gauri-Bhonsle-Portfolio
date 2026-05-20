import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Resume() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const title = section.querySelector('.resume-title')
    if (title) {
      gsap.fromTo(
        title,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: title, start: 'top 85%' } }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section id="resume" ref={sectionRef} className="w-full py-24 md:py-32 px-6 lg:px-12 relative">
      <div className="absolute inset-0 dot-grid opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="resume-title mb-12">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.2em] block mb-3">[ Resume ]</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">Download my resume</h2>
        </div>

        <div className="glass-card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-body text-lg text-charcoal/80 leading-[1.6]">
            You can download my CV as a PDF. It contains my education, projects, experience and selected coursework.
          </p>

          <div>
            <a
              href="/images/Gauri_Bhonsle_Resume.pdf.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-body text-sm text-charcoal bg-gold/10 hover:bg-gold/20 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
