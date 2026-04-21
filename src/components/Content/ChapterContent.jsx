import React from "react"
import { motion } from "framer-motion"
import MediaRenderer from "./MediaRenderer"
import { ExternalLink } from "lucide-react"

const fade = (i=0) => ({
  initial:{ opacity:0, y:16 },
  animate:{ opacity:1, y:0 },
  transition:{ delay: i*0.08, duration:0.5, ease:[0.16,1,0.3,1] }
})

export default function ChapterContent({ chapter, accent, onOpenLink }) {
  const { title, subtitle, intro, sections, media } = chapter
  const hero    = media?.find(m => m.variant === "hero")
  const wides   = media?.filter(m => m.variant === "wide")
  const inlines = media?.filter(m => m.variant === "inline")
  const videos  = media?.filter(m => m.type === "videoEmbed")
  const links   = media?.filter(m => m.type === "link")

  return (
    <div className="p-8 space-y-10 max-w-4xl mx-auto">

      {/* Hero image */}
      {hero && (
        <motion.div {...fade(0)} className="w-full h-72 rounded-xl overflow-hidden relative">
          <img src={hero.src} alt={hero.alt} className="w-full h-full object-cover"
            onError={e => { e.target.parentElement.style.display="none" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <p className="absolute bottom-3 left-4 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{hero.title}</p>
        </motion.div>
      )}

      {/* Chapter header */}
      <motion.div {...fade(1)} className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px" style={{ background: accent }} />
          <span className="text-xs font-mono tracking-[0.25em] uppercase" style={{ color: accent }}>
            {chapter.label}
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>{title}</h1>
        <p className="text-sm font-light" style={{ color: 'var(--text-muted)' }}>{subtitle}</p>
      </motion.div>

      {/* Intro paragraph */}
      <motion.p {...fade(2)} className="text-[15px] leading-8 whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
        {intro}
      </motion.p>

      {/* Inline images */}
      {inlines?.length > 0 && (
        <motion.div {...fade(3)} className={`grid gap-4 ${inlines.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
          {inlines.map((m, i) => (
            <MediaRenderer key={i} media={m} variant={m.variant} />
          ))}
        </motion.div>
      )}

      {/* Sections */}
      {sections?.map((s, i) => (
        <motion.div key={i} {...fade(4 + i)} className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
            <span className="w-1 h-5 rounded-full inline-block" style={{ background: accent }} />
            {s.heading}
          </h2>
          <p className="text-[14px] leading-8 pl-4" style={{ color: 'var(--text-secondary)' }}>{s.body}</p>
          {s.highlight && (
            <blockquote
              className="ml-4 pl-4 py-3 rounded-r-xl text-sm leading-7 italic"
              style={{
                borderLeft:`2px solid ${accent}`,
                background:`linear-gradient(90deg, ${accent}0d, transparent)`,
                color: 'var(--text-secondary)'
              }}
            >
              "{s.highlight}"
            </blockquote>
          )}
        </motion.div>
      ))}

      {/* Wide images */}
      {wides?.map((m, i) => (
        <motion.div key={i} {...fade(7 + i)}>
          <MediaRenderer media={m} variant={m.variant} />
        </motion.div>
      ))}

      {/* Videos */}
      {videos?.filter(v => v.videoId).map((v, i) => (
        <motion.div key={i} {...fade(9 + i)} className="space-y-2">
          <p className="text-xs font-mono tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>{v.title}</p>
          <div className="w-full aspect-video rounded-xl overflow-hidden"
               style={{ border:"1px solid var(--border)" }}>
            <iframe
              src={`https://www.youtube.com/embed/${v.videoId}`}
              title={v.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </motion.div>
      ))}

      {/* Links */}
      {links?.length > 0 && onOpenLink && (
        <motion.div {...fade(11)} className="space-y-3">
          <p className="text-xs font-mono tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>Links</p>
          <div className="flex flex-wrap gap-3">
            {links.map((link, i) => (
              <button
                key={i}
                onClick={() => onOpenLink(link.href, link.title)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'rgba(76,79,105,0.08)',
                  border: `1px solid ${accent}33`,
                  color: accent
                }}
              >
                <ExternalLink size={14} />
                {link.title}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      <div className="h-6" />
    </div>
  )
}
