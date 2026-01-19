const badgeHighlights = [
  'Stories from achievers coming soon',
  'Video interviews + student-led walkthroughs',
  'Guidance, milestones, and dream destinations',
]

export default function TestimonialsPage() {
  return (
    <main className="page testimonials-page">
      <section className="testimonials-coming-soon">
        <div className="coming-soon-panel">
          <p className="eyebrow">Testimonials</p>
          <h1>Stories are loading...</h1>
          <p>
            We are building a curated showcase of Vidya Bhumi alumni reflections, classroom anecdotes, and
            milestone journeys. Hang tight while we craft the perfect collection.
          </p>
          <div className="badge-row">
            {badgeHighlights.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>
        <div className="sparkle-ring" aria-hidden="true">
          <div className="sparkle-point" />
          <div className="sparkle-point" />
          <div className="sparkle-point" />
        </div>
      </section>
    </main>
  )
}
