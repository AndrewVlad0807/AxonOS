import React from "react"

const variantStyles = {
  wide:   { maxHeight: "480px" },
  inline: { maxHeight: "280px" },
}

export default function MediaRenderer({ media, variant }) {
  const { src, alt, title, type } = media
  const maxH = variant ? variantStyles[variant]?.maxHeight : "420px"

  return (
    <div className="w-full rounded-xl overflow-hidden relative group"
         style={{ border:"1px solid var(--border)" }}>
      {type === "gif"
        ? <img src={src} alt={alt} className="w-full h-auto object-contain"
            style={{ backgroundColor: 'var(--bg-elevated)' }}
            onError={e => e.target.parentElement.style.display="none"} />
        : <img src={src} alt={alt} className="w-full h-auto object-cover"
            style={{ maxHeight: maxH, backgroundColor: 'var(--bg-elevated)' }}
            onError={e => e.target.parentElement.style.display="none"} />
      }
      {title && (
        <div 
          className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ 
            color: 'var(--text-muted)',
            background: 'linear-gradient(to top, var(--bg-primary), transparent)'
          }}
        >
          {title}
        </div>
      )}
    </div>
  )
}
