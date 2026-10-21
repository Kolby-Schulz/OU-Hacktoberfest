import { useRef } from 'react'
import './Journey.css'
import { useParallax } from './useParallax'
import { COLORS } from './theme'

// ---------------------------------------------------------------------------
// Content — the bracketed placeholders are intentional. Fill them in with
// real event details; everything else (illustration data) is layout, not copy.
// ---------------------------------------------------------------------------

// Doors open and check-in start at 5 PM; the build window runs 5:30-9 PM
// inside that, so the 5-hour span is what EVENT_HOURS below reflects.
const EVENT_DATE = 'Oct 26, 2026 · 5–10 PM'
const EVENT_VENUE = 'REPF, University of Oklahoma'
const EVENT_ADDRESS = 'Rawl Engineering Practice Facility, 850 S Jenkins Ave, Norman, OK 73019'
const EVENT_HOURS = '5'
const ORG_NAME = 'Hacklahoma'
const CONTACT_EMAIL = 'hacklahoma@ou.edu'
// Hacktober is the fall lead-in to Hacklahoma's flagship spring hackathon —
// same org, same name, just the full-size event.
const SPRING_HACKATHON_NAME = ORG_NAME
const SPRING_DATE = 'Feb 6–7, 2027'

// This location's MLH listing restricts attendance to university students.
const WHO_CAN_JOIN = 'OU students'

// Pulled from the published MLH event listing.
const DISCORD_URL = 'https://discord.gg/6hQ2uva9n'
const REGISTER_URL = 'https://www.mlh.com/signin?return_to=https://events.mlh.com/auth/callback/participant'
const EVENT_PAGE_URL = 'https://events.mlh.com/events/15581-hacktoberfest-hack-day-norman-x-hacklahoma'

const HIGHLIGHTS = [
  'A fun, beginner-friendly mini hackathon',
  'Free food to keep you fueled throughout the evening',
  'Prizes for participants',
  'Opportunities to collaborate, learn, and connect with fellow students',
]

const SCHEDULE = [
  { time: '5:00 PM', label: 'Doors open, check-in' },
  { time: '5:15 PM', label: 'Opening ceremony and welcome' },
  { time: '5:30 PM', label: 'Hacking begins' },
  { time: '6:30 PM', label: 'Dinner and social time' },
  { time: '9:00 PM', label: 'Projects due' },
  { time: '9:15 PM', label: 'Project demos and showcase' },
  { time: '9:40 PM', label: 'Closing ceremony, winners, and prizes' },
  { time: '10:00 PM', label: 'Event ends' },
]

// This hackathon doesn't announce tracks/themes until the day of, so the
// three lanterns carry the When/Where/Who facts instead (there's no
// separate "premise" section anymore — this is the only info block).
const LANTERN_FACTS = [
  { sway: 'hk-sway-a', strandHeight: 96, label: 'When', value: EVENT_DATE },
  { sway: 'hk-sway-b', strandHeight: 132, label: 'Where', value: EVENT_VENUE },
  { sway: 'hk-sway-c', strandHeight: 104, label: 'Who', value: WHO_CAN_JOIN },
]

const BIRCH_TRUNKS = [
  { left: '7%', width: 22, color: '#141c48', branchHeight: 3, branches: [
    { side: 'left', top: '9%', width: '60%' },
    { side: 'right', top: '27%', width: '45%' },
    { side: 'left', top: '48%', width: '70%' },
    { side: 'right', top: '71%', width: '50%' },
  ] },
  { left: '21%', width: 14, color: '#111942', branchHeight: 2, branches: [
    { side: 'right', top: '15%', width: '60%' },
    { side: 'left', top: '38%', width: '50%' },
    { side: 'right', top: '62%', width: '70%' },
    { side: 'left', top: '84%', width: '55%' },
  ] },
  { left: '38%', width: 26, color: '#141c48', branchHeight: 3, branches: [
    { side: 'left', top: '6%', width: '50%' },
    { side: 'right', top: '33%', width: '65%' },
    { side: 'left', top: '55%', width: '40%' },
    { side: 'right', top: '79%', width: '60%' },
  ] },
  { left: '56%', width: 16, color: '#111942', branchHeight: 2, branches: [
    { side: 'left', top: '20%', width: '55%' },
    { side: 'right', top: '44%', width: '60%' },
    { side: 'left', top: '68%', width: '70%' },
    { side: 'right', top: '90%', width: '45%' },
  ] },
  { left: '73%', width: 24, color: '#141c48', branchHeight: 3, branches: [
    { side: 'right', top: '12%', width: '55%' },
    { side: 'left', top: '30%', width: '65%' },
    { side: 'right', top: '58%', width: '45%' },
    { side: 'left', top: '76%', width: '60%' },
  ] },
  { left: '90%', width: 18, color: '#111942', branchHeight: 2, branches: [
    { side: 'left', top: '18%', width: '60%' },
    { side: 'right', top: '41%', width: '50%' },
    { side: 'left', top: '64%', width: '65%' },
    { side: 'right', top: '88%', width: '55%' },
  ] },
] as const

const LAMP_POSTS = [
  { x: 1020, y: 591, w: 20, h: 26 },
  { x: 978, y: 599.6, w: 28, h: 36.4 },
  { x: 919.5, y: 611.9, w: 37, h: 48.1 },
  { x: 844, y: 623.6, w: 48, h: 62.4 },
  { x: 745, y: 635.4, w: 62, h: 80.6 },
  { x: 600, y: 638, w: 80, h: 104 },
  { x: 436, y: 642, w: 100, h: 130 },
]

// Ground fog. Each FogLayer is its own data-depth scene layer dropped between
// two tree layers (see where these are used in Hero), so the haze actually
// sits in front of the trees behind it and behind the trees in front of it,
// instead of just washing over the whole image. Each one is a single
// oversized, feathered-edge band (not separate blobs) so it reads as one
// continuous bank of fog rolling through, not distinct shapes moving past
// each other - it's sized well past 100% width so it still fully covers the
// scene at both ends of its drift.
const FOG_LOW = { top: '54%', height: '170px', opacity: 0.6, drift: 'hk-fog-drift-a' }
const FOG_HIGH = { top: '60%', height: '190px', opacity: 0.68, drift: 'hk-fog-drift-b' }

type Fog = { top: string; height: string; opacity: number; drift: string }

function FogLayer({ fog }: { fog: Fog }) {
  return (
    <div
      className={`hk-fog ${fog.drift}`}
      style={{ top: fog.top, height: fog.height, opacity: fog.opacity }}
    />
  )
}

// ---------------------------------------------------------------------------
// Shared styles
// ---------------------------------------------------------------------------

const eyebrowStyle = {
  fontFamily: "'Fragment Mono', ui-monospace, monospace",
  fontSize: 13,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: COLORS.lantern,
} as const

const h2Style = {
  margin: 0,
  fontFamily: "'Cormorant', Georgia, serif",
  fontWeight: 400,
  fontSize: 'clamp(38px, 4.6vw, 68px)',
  lineHeight: 1.05,
  letterSpacing: '-0.015em',
  textWrap: 'balance',
  color: '#f6ead6',
} as const

const navLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  minHeight: 44,
  fontSize: 15,
  fontWeight: 500,
  textDecoration: 'none',
} as const

// ---------------------------------------------------------------------------
// SVG sprite — symbols reused everywhere via <use href="#hk-…">
// ---------------------------------------------------------------------------

function Sprite() {
  return (
    <svg aria-hidden="true" width="0" height="0" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
      <defs>
        <symbol id="hk-tr-oval" viewBox="0 0 80 200">
          <rect x="37" y="112" width="6" height="88" fill="currentColor" />
          <ellipse cx="34" cy="58" rx="28" ry="52" />
          <ellipse cx="50" cy="80" rx="26" ry="48" />
          <ellipse cx="38" cy="106" rx="23" ry="38" />
          <ellipse cx="50" cy="46" rx="12" ry="30" fill="#ffffff" opacity="0.12" />
          <ellipse cx="26" cy="100" rx="13" ry="24" fill="#000000" opacity="0.08" />
        </symbol>
        <symbol id="hk-tr-leaf" viewBox="0 0 80 220">
          <rect x="37" y="150" width="6" height="70" fill="currentColor" />
          <ellipse cx="40" cy="38" rx="21" ry="36" />
          <ellipse cx="40" cy="86" rx="29" ry="46" />
          <ellipse cx="40" cy="138" rx="25" ry="38" />
          <ellipse cx="48" cy="28" rx="10" ry="22" fill="#ffffff" opacity="0.14" />
          <ellipse cx="29" cy="130" rx="12" ry="22" fill="#000000" opacity="0.08" />
        </symbol>
        <symbol id="hk-tr-round" viewBox="0 0 120 180">
          <rect x="57" y="104" width="6" height="76" fill="currentColor" />
          <circle cx="42" cy="58" r="37" />
          <circle cx="78" cy="52" r="41" />
          <circle cx="58" cy="90" r="35" />
          <circle cx="80" cy="36" r="18" fill="#ffffff" opacity="0.12" />
          <circle cx="32" cy="90" r="16" fill="#000000" opacity="0.08" />
          {/* Branch marks drawn last so the canopy circles above don't paint over - and cut off - the part that should reach into the leaves. */}
          <path d="M60 128 L40 98 M60 138 L72 100" stroke="currentColor" strokeWidth="3" fill="none" />
        </symbol>
        <symbol id="hk-tr-cloud" viewBox="0 0 160 180">
          {/* Extended up to y=92 (not 104) so the straight run of the trunk - between the two angled branches - actually reaches into the canopy circles instead of stopping short of all three. */}
          <rect x="76" y="92" width="8" height="88" fill="currentColor" />
          <circle cx="50" cy="72" r="42" />
          <circle cx="90" cy="52" r="48" />
          <circle cx="118" cy="80" r="38" />
          <circle cx="102" cy="40" r="24" fill="#ffffff" opacity="0.1" />
          <path d="M80 132 L56 98 M80 140 L106 98" stroke="currentColor" strokeWidth="4" fill="none" />
        </symbol>
        <symbol id="hk-spark" viewBox="0 0 24 24">
          <path d="M12 0 C12.8 8 16 11.2 24 12 C16 12.8 12.8 16 12 24 C11.2 16 8 12.8 0 12 C8 11.2 11.2 8 12 0Z" />
        </symbol>
        <symbol id="hk-leaf" viewBox="0 0 24 32">
          <path d="M12 1 C21 8 22 20 12 31 C2 20 3 8 12 1Z" />
          <path d="M12 7 V31" stroke="#0c1230" strokeOpacity="0.28" strokeWidth="1" fill="none" />
        </symbol>
        <symbol id="hk-post" viewBox="0 0 100 130">
          <rect x="48.5" y="52" width="3" height="78" fill="#0a1030" />
          <circle cx="50" cy="46" r="44" fill="#ffc55a" opacity="0.07" />
          <circle cx="50" cy="46" r="26" fill="#ffc55a" opacity="0.16" />
          <circle cx="50" cy="46" r="8" fill="#ffe2a0" />
        </symbol>
      </defs>
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Hero — sky, harvest moon, title, three tree ridges, ground glow, leaves
// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section className="hk-hero" data-scene="top" style={{ position: 'relative', overflow: 'hidden', background: '#0a1030' }}>
      <div data-depth="0.6" className="hk-layer" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'linear-gradient(180deg, #0a1030 0%, #111b47 34%, #23225a 58%, #45295a 78%, #6a3157 100%)' }}>
        <svg viewBox="0 0 1440 880" preserveAspectRatio="xMidYMin slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <g fill={COLORS.parchment}>
            {[
              [60, 70, 1.4, 0.8], [150, 180, 1, 0.6], [230, 60, 1.8, 0.9], [310, 250, 1.1, 0.6],
              [400, 120, 1.3, 0.8], [470, 40, 1, 0.6], [540, 300, 1, 0.5], [620, 90, 1.6, 0.9],
              [700, 210, 1, 0.6], [770, 50, 1.2, 0.7], [850, 150, 1.7, 0.9], [930, 280, 1, 0.6],
              [1000, 80, 1.2, 0.8], [1080, 190, 1, 0.6], [1150, 40, 1.5, 0.9], [1230, 140, 1.1, 0.7],
              [1300, 250, 1.3, 0.7], [1380, 90, 1.7, 0.9], [1410, 330, 1, 0.5], [90, 330, 1.2, 0.6],
              [190, 420, 1, 0.5], [350, 400, 1.3, 0.5], [640, 380, 1, 0.5], [880, 400, 1.1, 0.5],
              [1190, 300, 1, 0.6], [520, 170, 1, 0.6], [980, 340, 1.2, 0.6],
            ].map(([cx, cy, r, o], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} opacity={o} />
            ))}
          </g>
          <g fill={COLORS.glow}>
            {[
              [109, 109, 18], [661, 143, 14], [901, 51, 22], [1254, 88, 16], [1082, 262, 12], [280, 164, 12],
            ].map(([x, y, s], i) => (
              <use key={i} href="#hk-spark" x={x} y={y} width={s} height={s} />
            ))}
          </g>
        </svg>
      </div>

      {/* Harvest moon */}
      <div data-depth="0.5" className="hk-layer" aria-hidden="true" style={{ position: 'absolute', zIndex: 1, right: '8%', bottom: 'calc(var(--hk-h) * 0.22)', width: 'clamp(180px, 21vw, 400px)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle at 38% 32%, #ffe6a8 0%, #f9b855 48%, #ec8a35 100%)', boxShadow: '0 0 0 28px rgba(249,184,85,0.07), 0 0 0 70px rgba(249,184,85,0.045), 0 0 150px 30px rgba(240,140,60,0.35)' }}>
        <div style={{ position: 'absolute', left: '58%', top: '22%', width: '17%', height: '17%', borderRadius: '50%', background: 'rgba(214,118,40,0.3)' }} />
        <div style={{ position: 'absolute', left: '26%', top: '48%', width: '24%', height: '24%', borderRadius: '50%', background: 'rgba(214,118,40,0.22)' }} />
        <div style={{ position: 'absolute', left: '62%', top: '60%', width: '10%', height: '10%', borderRadius: '50%', background: 'rgba(214,118,40,0.3)' }} />
      </div>

      <div data-depth="0.38" data-fade="560" className="hk-layer" style={{ position: 'relative', zIndex: 2, boxSizing: 'border-box', maxWidth: 1400, margin: '0 auto', padding: 'clamp(118px, 11vw, 230px) clamp(20px, 5.5vw, 80px) 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={eyebrowStyle}>Fall hackathon · {EVENT_DATE} · {EVENT_VENUE}</div>
        <h1 style={{ margin: 0, fontFamily: "'Cormorant', Georgia, serif", fontWeight: 400, fontSize: 'clamp(64px, 13.4vw, 250px)', lineHeight: 0.92, letterSpacing: '-0.025em', color: '#f6ead6' }}>
          Hack<em style={{ fontStyle: 'italic', color: COLORS.lantern }}>tober</em>
        </h1>
        <p style={{ margin: 0, maxWidth: '30em', fontSize: 'clamp(17px, 1.45vw, 21px)', lineHeight: 1.5, color: COLORS.body }}>
          A fall hackathon by {ORG_NAME}. {EVENT_HOURS} hours to build something bright while the nights get long.
        </p>
      </div>

      {/* Far ridge */}
      <div data-depth="0.3" className="hk-layer" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 3 }}>
        <svg viewBox="0 0 1440 880" preserveAspectRatio="xMidYMax slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', color: '#2a2250' }}>
          {([
            ['leaf', 20, 498, 40, 110, '#6b3558'], ['oval', 77, 504, 36, 90, '#4a3a80'],
            ['leaf', 128, 460, 44, 120, '#8a4a45'], ['oval', 188, 484, 34, 86, '#6b3558'],
            ['leaf', 242, 450, 40, 112, '#9a6a3a'], ['oval', 299, 468, 38, 94, '#4a3a80'],
            ['leaf', 354, 466, 36, 100, '#6b3558'], ['oval', 422, 484, 36, 90, '#8a4a45'],
            ['leaf', 485, 478, 40, 108, '#4a3a80'], ['oval', 574, 530, 32, 80, '#6b3558'],
            ['leaf', 673, 540, 34, 92, '#4a3a80'], ['oval', 913, 524, 34, 86, '#6b3558'],
            ['leaf', 964, 478, 42, 116, '#8a4a45'], ['oval', 1027, 488, 36, 92, '#4a3a80'],
            ['leaf', 1080, 462, 40, 110, '#9a6a3a'], ['oval', 1142, 480, 36, 90, '#6b3558'],
            ['leaf', 1193, 450, 44, 122, '#4a3a80'], ['oval', 1258, 488, 34, 88, '#8a4a45'],
            ['leaf', 1311, 478, 38, 104, '#6b3558'], ['oval', 1372, 498, 36, 92, '#9a6a3a'],
          ] as const).map(([sym, x, y, w, h, fill], i) => (
            <use key={i} href={`#hk-tr-${sym}`} x={x} y={y} width={w} height={h} fill={fill} />
          ))}
          <path d="M0 610 C120 580 250 548 420 566 C560 580 640 640 800 632 C940 626 1040 560 1200 566 C1300 570 1380 590 1440 580 V880 H0Z" fill="#3a2a62" />
        </svg>
      </div>

      {/* Fog drifting between the far and mid ridges - behind the mid ridge, in front of the far one */}
      <div data-depth="0.3" className="hk-layer" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}>
        <FogLayer fog={FOG_LOW} />
      </div>

      {/* Mid ridge */}
      <div data-depth="0.16" className="hk-layer" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 4 }}>
        <svg viewBox="0 0 1440 880" preserveAspectRatio="xMidYMax slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', color: '#12143a' }}>
          {([
            ['round', 0, 514, 120, 180, COLORS.rust], ['leaf', 115, 476, 70, 196, COLORS.ochre],
            ['cloud', 175, 494, 150, 170, COLORS.maple], ['oval', 308, 504, 64, 160, COLORS.ember],
            ['leaf', 379, 500, 62, 172, '#2c3577'], ['round', 438, 530, 104, 156, COLORS.ochre],
            ['oval', 542, 560, 56, 140, COLORS.rust], ['leaf', 980, 528, 60, 166, COLORS.maple],
            ['cloud', 1022, 502, 156, 176, COLORS.ember], ['oval', 1157, 504, 66, 166, '#2c3577'],
            ['leaf', 1224, 468, 72, 200, COLORS.ochre], ['round', 1288, 488, 124, 186, COLORS.rust],
            ['oval', 1395, 530, 60, 150, COLORS.maple],
          ] as const).map(([sym, x, y, w, h, fill], i) => (
            <use key={i} href={`#hk-tr-${sym}`} x={x} y={y} width={w} height={h} fill={fill} />
          ))}
          <path d="M0 700 C140 660 300 650 460 676 C600 698 700 722 860 712 C1000 704 1100 660 1260 664 C1340 666 1400 680 1440 672 V880 H0Z" fill="#1d1b49" />
        </svg>
      </div>

      {/* Fog drifting between the mid ridge and the near ground trees - behind the ground layer, in front of the mid ridge */}
      <div data-depth="0.16" className="hk-layer" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none' }}>
        <FogLayer fog={FOG_HIGH} />
      </div>

      {/* Ground: three near trees */}
      <div data-depth="0" className="hk-layer" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 5 }}>
        <svg viewBox="0 0 1440 880" preserveAspectRatio="xMidYMax slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', color: '#070a1e' }}>
          <use href="#hk-tr-leaf" x="255" y="524" width="90" height="250" fill={COLORS.maple} />
          <use href="#hk-tr-cloud" x="735" y="448" width="270" height="304" fill="#c75a2a" />
          <use href="#hk-tr-oval" x="1208" y="594" width="84" height="210" fill="#1a1f55" />
          <path d="M0 792 C150 768 330 762 500 778 C600 788 650 748 740 742 C860 734 940 772 1060 792 C1180 810 1330 786 1440 796 V880 H0Z" fill="#0c1230" />
        </svg>
      </div>

      {/* Foreground drifting leaves */}
      <div data-depth="-0.3" className="hk-layer" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none' }}>
        {[
          { left: '6%', top: '58%', size: 26, bg: COLORS.ember, cls: 'hk-leaf-a', delay: '-2s' },
          { left: '14%', top: '9%', size: 14, bg: COLORS.ochre, cls: 'hk-leaf-b', delay: '-6s' },
          { left: '31%', top: '70%', size: 18, bg: COLORS.rust, cls: 'hk-leaf-a', delay: '-9s' },
          { left: '46%', top: '12%', size: 12, bg: COLORS.ember, cls: 'hk-leaf-b', delay: '-1s' },
          { left: '58%', top: '50%', size: 16, bg: COLORS.ochre, cls: 'hk-leaf-a', delay: '-5s' },
          { left: '71%', top: '26%', size: 20, bg: COLORS.rust, cls: 'hk-leaf-b', delay: '-8s' },
          { left: '83%', top: '64%', size: 30, bg: COLORS.ember, cls: 'hk-leaf-a', delay: '-3s', blur: 1.5 },
          { left: '93%', top: '16%', size: 14, bg: COLORS.ochre, cls: 'hk-leaf-b', delay: '-11s' },
          { left: '24%', top: '86%', size: 38, bg: COLORS.maple, cls: 'hk-leaf-b', delay: '-4s', blur: 2 },
        ].map((leaf, i) => (
          <div
            key={i}
            className={leaf.cls}
            style={{
              position: 'absolute', left: leaf.left, top: leaf.top, width: leaf.size, height: leaf.size,
              borderRadius: '2px 70% 2px 70%', background: leaf.bg, animationDelay: leaf.delay,
              filter: leaf.blur ? `blur(${leaf.blur}px)` : undefined,
            }}
          />
        ))}
      </div>

      <nav aria-label="Main" style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 8, boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end', gap: '8px 24px', padding: '18px calc(clamp(20px, 5.5vw, 80px) + 110px) 18px clamp(20px, 5.5vw, 80px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px 28px' }}>
          <a href="#details" className="hk-ghost hk-wide" style={navLinkStyle}>Details</a>
          <a href="#schedule" className="hk-ghost hk-wide" style={navLinkStyle}>Schedule</a>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="hk-ghost hk-wide" style={navLinkStyle}>Discord</a>
          <a href="#spring" className="hk-ghost hk-wide" style={navLinkStyle}>Spring</a>
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="hk-btn" style={{ ...navLinkStyle, boxSizing: 'border-box', padding: '0 22px', borderRadius: 999, fontWeight: 600 }}>Register</a>
        </div>
      </nav>

    </section>
  )
}

// ---------------------------------------------------------------------------
// Mid scene — birch forest wrapping the details (lantern) section
// ---------------------------------------------------------------------------

function MidScene() {
  return (
    <div data-scene="mid" style={{ position: 'relative', overflow: 'hidden', background: '#0c1230' }}>
      <div className="hk-fade" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div data-depth="0.26" className="hk-layer" style={{ position: 'absolute', top: -360, bottom: -360, left: 0, right: 0 }}>
          {BIRCH_TRUNKS.map((trunk, i) => (
            <div key={i} style={{ position: 'absolute', top: 0, bottom: 0, left: trunk.left, width: trunk.width, background: trunk.color }}>
              {trunk.branches.map((b, j) => (
                <div
                  key={j}
                  style={{
                    position: 'absolute',
                    [b.side]: 0,
                    top: b.top,
                    width: b.width,
                    height: trunk.branchHeight,
                    background: '#0c1230',
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 440, zIndex: 1, pointerEvents: 'none' }}>
        {[
          [6, 18, 2, 0.25], [33, 30, 2, 0.3], [71, 24, 2, 0.3], [90, 40, 2, 0.4], [17, 50, 2, 0.45],
          [49, 56, 2, 0.5], [62, 68, 3, 0.6], [27, 74, 2, 0.6], [82, 78, 2, 0.7], [9, 86, 3, 0.75],
          [42, 90, 2, 0.8], [95, 92, 2, 0.8],
        ].map(([left, top, size, o], i) => (
          <div key={i} style={{ position: 'absolute', left: `${left}%`, top: `${top}%`, width: size, height: size, borderRadius: '50%', background: COLORS.parchment, opacity: o }} />
        ))}
        <svg viewBox="0 0 24 24" style={{ position: 'absolute', left: '56%', top: '38%', width: 12, height: 12, opacity: 0.45 }}><use href="#hk-spark" fill={COLORS.glow} /></svg>
        <svg viewBox="0 0 24 24" style={{ position: 'absolute', left: '76%', top: '60%', width: 16, height: 16, opacity: 0.7 }}><use href="#hk-spark" fill={COLORS.glow} /></svg>
        <svg viewBox="0 0 24 24" style={{ position: 'absolute', left: '21%', top: '88%', width: 14, height: 14, opacity: 0.85 }}><use href="#hk-spark" fill={COLORS.starlight} /></svg>
      </div>

      <div data-depth="-0.12" className="hk-layer" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        {[
          [11, 14, 5, '0'], [47, 6, 4, '-1.2s'], [86, 22, 6, '-2.6s'], [63, 39, 4, '-0.6s'],
          [4, 52, 5, '-3.4s'], [93, 68, 5, '-1.9s'], [30, 93, 4, '-2.9s'],
        ].map(([left, top, size, delay], i) => (
          <div key={i} className="hk-glint" style={{ position: 'absolute', left: `${left}%`, top: `${top}%`, width: size, height: size, borderRadius: '50%', background: COLORS.glow, boxShadow: `0 0 ${Number(size) * 2.4}px ${Number(size) * 0.7}px rgba(255,197,90,0.55)`, animationDelay: delay as string }} />
        ))}
        <div className="hk-leaf-a" style={{ position: 'absolute', left: '68%', top: '9%', width: 16, height: 16, borderRadius: '2px 70% 2px 70%', background: COLORS.ember, animationDelay: '-7s' }} />
        <div className="hk-leaf-b" style={{ position: 'absolute', left: '52%', top: '44%', width: 13, height: 13, borderRadius: '2px 70% 2px 70%', background: COLORS.ochre, animationDelay: '-3s' }} />
        <div className="hk-leaf-a" style={{ position: 'absolute', left: '16%', top: '80%', width: 18, height: 18, borderRadius: '2px 70% 2px 70%', background: COLORS.rust, animationDelay: '-10s' }} />
      </div>

      <section id="details" style={{ position: 'relative', zIndex: 2, boxSizing: 'border-box', minHeight: 1040, maxWidth: 1400, margin: '0 auto', padding: '130px clamp(20px, 5.5vw, 80px) 90px' }}>
        <div style={{ maxWidth: 640, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <h2 style={h2Style}>Follow the <em style={{ fontStyle: 'italic', color: COLORS.lantern }}>lanterns.</em></h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: COLORS.body }}>
            Whether you're an experienced developer or just getting started, this is a great opportunity to explore
            new ideas, work on a fun project, meet fellow students, and enjoy a relaxed evening of creativity and
            collaboration. Come hang out, connect with other students, and celebrate the spirit of open-source
            development!
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {HIGHLIGHTS.map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'baseline', gap: 10, fontSize: 17, lineHeight: 1.5, color: COLORS.body }}>
                <svg aria-hidden="true" viewBox="0 0 24 24" style={{ flexShrink: 0, width: 12, height: 12, color: COLORS.lantern }}><use href="#hk-spark" fill="currentColor" /></svg>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: COLORS.caption }}>{EVENT_ADDRESS}</p>
        </div>

        <svg aria-hidden="true" viewBox="0 0 1240 96" preserveAspectRatio="xMidYMid slice" style={{ position: 'relative', zIndex: 2, display: 'block', width: '100%', height: 96, marginTop: 48, overflow: 'visible' }}>
          <path d="M-180 46 C40 6 420 66 640 44 S1100 8 1420 40" stroke={COLORS.trunk} strokeWidth="13" strokeLinecap="round" fill="none" />
          <path d="M300 33 L334 11 M760 40 L800 64 M1010 26 L980 6" stroke={COLORS.trunk} strokeWidth="5" strokeLinecap="round" fill="none" />
          <use href="#hk-leaf" x="330" y="-6" width="15" height="20" fill={COLORS.ember} transform="rotate(55 337 4)" />
          <use href="#hk-leaf" x="796" y="58" width="15" height="20" fill={COLORS.ochre} transform="rotate(130 803 68)" />
          <use href="#hk-leaf" x="966" y="-8" width="14" height="19" fill={COLORS.rust} transform="rotate(-50 973 2)" />
          <use href="#hk-leaf" x="520" y="48" width="13" height="17" fill={COLORS.maple} transform="rotate(160 526 56)" />
        </svg>

        <div style={{ position: 'relative', zIndex: 1, marginTop: -50, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'flex-start', gap: '0 32px' }}>
          {LANTERN_FACTS.map((fact) => (
            <div key={fact.label} className={fact.sway} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 250, maxWidth: '100%' }}>
              <div aria-hidden="true" style={{ width: 2, height: fact.strandHeight, background: '#3a4280' }} />
              <div aria-hidden="true" style={{ width: 78, height: 12, borderRadius: '4px 4px 0 0', background: COLORS.trunk }} />
              <div style={{ boxSizing: 'border-box', width: '100%', minHeight: 250, padding: '34px 26px', borderRadius: '34px / 44px', background: 'repeating-linear-gradient(180deg, rgba(190,90,20,0) 0px, rgba(190,90,20,0) 40px, rgba(190,90,20,0.22) 40px, rgba(190,90,20,0.22) 41px), radial-gradient(120% 90% at 50% 45%, #ffe6a8 0%, #ffc55a 48%, #ee8f37 100%)', boxShadow: '0 0 0 1px rgba(255,214,128,0.5), 0 0 90px 18px rgba(255,170,70,0.32)', color: '#0c1230', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
                <div style={{ fontFamily: "'Fragment Mono', ui-monospace, monospace", fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{fact.label}</div>
                <div style={{ fontFamily: "'Cormorant', Georgia, serif", fontSize: 24, lineHeight: 1.25 }}>{fact.value}</div>
              </div>
              <div aria-hidden="true" style={{ width: 78, height: 10, borderRadius: '0 0 4px 4px', background: COLORS.trunk }} />
              <div aria-hidden="true" style={{ width: 2, height: 30, background: '#ee8f37' }} />
              <div aria-hidden="true" style={{ width: 8, height: 8, background: '#ee8f37', transform: 'rotate(45deg)' }} />
            </div>
          ))}
        </div>

        <div id="schedule" style={{ position: 'relative', zIndex: 1, marginTop: 90, maxWidth: 560 }}>
          <div style={eyebrowStyle}>Run of the evening</div>
          <h2 style={{ ...h2Style, fontSize: 'clamp(30px, 3.2vw, 44px)', marginTop: 14, marginBottom: 32 }}>Schedule</h2>
          <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {SCHEDULE.map((item) => (
              <li key={item.time} style={{ display: 'flex', alignItems: 'baseline', gap: 24, borderTop: '1px solid rgba(246,234,214,0.14)', paddingTop: 16 }}>
                <span style={{ flexShrink: 0, width: 92, fontFamily: "'Fragment Mono', ui-monospace, monospace", fontSize: 14, letterSpacing: '0.04em', color: COLORS.lantern }}>{item.time}</span>
                <span style={{ fontSize: 17, lineHeight: 1.4, color: COLORS.body }}>{item.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="hk-fade hk-wide" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}>
        <div data-depth="-0.2" className="hk-layer" style={{ position: 'absolute', top: -360, bottom: -360, left: 0, right: 0 }}>
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: -70, width: 104, background: COLORS.trunk }}>
            <div style={{ position: 'absolute', left: 96, top: '43%', width: 64, height: 9, borderRadius: 5, background: COLORS.trunk, transform: 'rotate(-18deg)', transformOrigin: '0 50%' }} />
            <div style={{ position: 'absolute', left: 150, top: 'calc(43% - 34px)', width: 16, height: 16, borderRadius: '2px 70% 2px 70%', background: COLORS.ember, transform: 'rotate(-30deg)' }} />
          </div>
          <div style={{ position: 'absolute', top: 0, bottom: 0, right: -80, width: 120, background: COLORS.trunk }}>
            <div style={{ position: 'absolute', right: 112, top: '15%', width: 58, height: 9, borderRadius: 5, background: COLORS.trunk, transform: 'rotate(16deg)', transformOrigin: '100% 50%' }} />
            <div style={{ position: 'absolute', right: 160, top: 'calc(15% - 30px)', width: 15, height: 15, borderRadius: '2px 70% 2px 70%', background: COLORS.ochre, transform: 'rotate(100deg)' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Closing scene — leaves turn to stars over a lantern trail toward spring
// ---------------------------------------------------------------------------

function SpringScene() {
  return (
    <section id="spring" className="hk-close" data-scene="bottom" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #0c1230 0%, #101a52 34%, #15297c 66%, #1c3fa6 100%)' }}>
      <div data-depth="0.35" className="hk-layer" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <svg viewBox="0 0 1440 806" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {[
            [111, 458, 18, 24, COLORS.ember, 30, 120, 470],
            [223, 490, 14, 19, COLORS.ochre, -20, 230, 500],
            [332, 444, 16, 21, COLORS.rust, 60, 340, 455],
            [443, 481, 13, 17, COLORS.ember, -45, 450, 490],
            [552, 430, 15, 20, COLORS.ochre, 15, 560, 440],
            [644, 462, 12, 16, COLORS.lantern, 70, 650, 470],
            [728, 391, 13, 17, COLORS.lantern, -30, 735, 400],
            [714, 292, 11, 15, COLORS.ochre, 40, 720, 300],
            [775, 203, 10, 13, '#ffd98a', 20, 780, 210],
          ].map(([x, y, w, h, fill, deg, cx, cy], i) => (
            <g key={i} className={i % 2 === 0 ? 'hk-leaf-float-a' : 'hk-leaf-float-b'} style={{ animationDelay: `-${(i * 1.1).toFixed(1)}s` }}>
              <use href="#hk-leaf" x={x} y={y} width={w} height={h} fill={fill as string} transform={`rotate(${deg} ${cx} ${cy})`} />
            </g>
          ))}
          <g fill={COLORS.glow}>
            {[[833, 323, 14], [891, 171, 18], [1009, 79, 22], [1142, 162, 16], [1204, 394, 12], [1310, 240, 20], [1393, 363, 14]].map(([x, y, s], i) => (
              <use key={i} href="#hk-spark" x={x} y={y} width={s} height={s} />
            ))}
          </g>
          <g fill={COLORS.starlight}>
            {[[954, 414, 12], [1083, 293, 14], [1263, 63, 14], [1384, 144, 12], [855, 65, 10]].map(([x, y, s], i) => (
              <use key={i} href="#hk-spark" x={x} y={y} width={s} height={s} />
            ))}
          </g>
          <g fill={COLORS.parchment} opacity="0.8">
            {[
              [800, 120, 1.3], [880, 260, 1.1], [940, 330, 1.5], [1000, 220, 1], [1060, 150, 1.4],
              [1120, 60, 1], [1180, 280, 1.2], [1240, 200, 1.6], [1290, 340, 1], [1360, 90, 1.3],
              [1420, 290, 1.1], [760, 60, 1], [1100, 430, 1.2], [1230, 470, 1], [1380, 450, 1.3],
            ].map(([cx, cy, r], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} />
            ))}
          </g>
        </svg>
      </div>

      <div data-depth="0.22" className="hk-layer" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <svg viewBox="0 0 1440 806" preserveAspectRatio="xMidYMax slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <circle cx="1060" cy="600" r="170" fill="#ffd98a" opacity="0.05" />
          <circle cx="1060" cy="600" r="112" fill="#ffd98a" opacity="0.07" />
          <circle cx="1060" cy="600" r="66" fill="#ffd98a" opacity="0.1" />
          <circle cx="1060" cy="600" r="32" fill={COLORS.glow} opacity="0.22" />
          <use href="#hk-spark" x="1036" y="562" width="48" height="48" fill={COLORS.starlight} />
          <path d="M0 560 C200 520 420 540 620 566 C800 588 900 520 1080 508 C1240 498 1360 530 1440 520 V806 H0Z" fill="#16308c" />
        </svg>
        <div style={{ position: 'absolute', left: 0, right: 0, top: '100%', height: 460, background: '#16308c' }} />
      </div>

      <div data-depth="0.1" className="hk-layer" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 806" preserveAspectRatio="xMidYMax slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <path d="M0 640 C220 600 460 628 700 640 C900 650 1100 600 1440 612 V806 H0Z" fill="#10226a" />
          <path d="M380 806 C520 740 760 730 860 690 C940 658 1010 630 1056 607 L1064 607 C1040 640 1000 676 930 712 C840 760 700 770 620 806Z" fill={COLORS.trailBlue} />
          {LAMP_POSTS.map((post, i) => (
            <use key={i} href="#hk-post" x={post.x} y={post.y} width={post.w} height={post.h} />
          ))}
        </svg>
        <div style={{ position: 'absolute', left: 0, right: 0, top: '100%', height: 460, background: '#10226a' }} />
      </div>

      <div data-depth="0" className="hk-layer" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 3 }}>
        <svg viewBox="0 0 1440 806" preserveAspectRatio="xMidYMax slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', color: '#05081a' }}>
          <use href="#hk-tr-cloud" x="0" y="455" width="222" height="250" fill="#c75a2a" />
          <use href="#hk-tr-leaf" x="262" y="510" width="76" height="209" fill={COLORS.ochre} />
          <use href="#hk-tr-oval" x="1340" y="560" width="70" height="175" fill="#2a4bb8" />
          <path d="M0 700 C120 670 260 690 360 740 C470 790 600 790 760 780 C900 772 1040 790 1160 776 C1260 764 1360 730 1440 720 V806 H0Z" fill="#0a1030" />
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 6, boxSizing: 'border-box', maxWidth: 1400, margin: '0 auto', padding: 'clamp(64px, 7vw, 120px) clamp(20px, 5.5vw, 80px) 0' }}>
        <div style={{ maxWidth: 620, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <h2 style={h2Style}>Same night sky. <em style={{ fontStyle: 'italic', color: COLORS.lantern }}>Next season.</em></h2>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.6, color: '#e1dcec' }}>Hacktober is the fall chapter of {SPRING_HACKATHON_NAME}, Oklahoma's largest hackathon. The trail you start here runs through winter and comes out the other side on {SPRING_DATE}.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px 28px', marginTop: 10 }}>
            <a id="register" href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="hk-btn" style={{ display: 'inline-flex', alignItems: 'center', minHeight: 52, boxSizing: 'border-box', padding: '0 30px', borderRadius: 999, fontSize: 17, fontWeight: 600, textDecoration: 'none' }}>Register for Hacktober</a>
            <a href={EVENT_PAGE_URL} target="_blank" rel="noopener noreferrer" className="hk-ghost" style={{ display: 'inline-flex', alignItems: 'center', minHeight: 44, fontSize: 17, fontWeight: 500, textUnderlineOffset: '5px' }}>Full event listing</a>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="hk-ghost" style={{ display: 'inline-flex', alignItems: 'center', minHeight: 44, fontSize: 17, fontWeight: 500, textUnderlineOffset: '5px' }}>Join the Discord</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ position: 'relative', zIndex: 2, boxSizing: 'border-box', minHeight: 120, padding: '28px clamp(20px, 5.5vw, 80px) 36px', background: '#0a1030', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px 32px' }}>
      <div style={{ fontFamily: "'Cormorant', Georgia, serif", fontStyle: 'italic', fontSize: 22, color: COLORS.parchment }}>hacktober</div>
      <div style={{ fontFamily: "'Fragment Mono', ui-monospace, monospace", fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: COLORS.caption, display: 'flex', flexWrap: 'wrap', gap: '6px 18px' }}>
        <span>{ORG_NAME} · <a href={`mailto:${CONTACT_EMAIL}`} className="hk-ghost" style={{ textDecoration: 'none' }}>{CONTACT_EMAIL}</a></span>
        <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="hk-ghost" style={{ textDecoration: 'none' }}>Discord</a>
        <a href={EVENT_PAGE_URL} target="_blank" rel="noopener noreferrer" className="hk-ghost" style={{ textDecoration: 'none' }}>Event listing</a>
      </div>
      <img src="/hacklahoma-logo.png" alt="Hacklahoma" style={{ height: 24, width: 'auto', opacity: 0.9 }} />
    </footer>
  )
}

// MLH's official trust badge — asset + embed markup provided by MLH
// (brand-guidelines page), not something we design. Pinned flush to the
// true top-right corner (top:0, as MLH intends); the nav row reserves
// space to its left instead of the badge floating below it.
function MlhBadge() {
  return (
    <a
      id="mlh-trust-badge"
      style={{ display: 'block', maxWidth: 100, minWidth: 60, position: 'fixed', right: 'clamp(20px, 5.5vw, 80px)', top: 0, width: '10%', zIndex: 10000 }}
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2027-season&utm_content=blue"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://logged-assets.s3.amazonaws.com/trust-badge/2027/mlh-trust-badge-2027-blue.svg"
        alt="Major League Hacking 2027 Hackathon Season"
        style={{ width: '100%' }}
      />
    </a>
  )
}

function App() {
  const rootRef = useRef<HTMLDivElement>(null)
  useParallax(rootRef)

  return (
    <div ref={rootRef} data-hk-root="1" id="top" className="hk-page" style={{ position: 'relative' }}>
      <Sprite />
      <MlhBadge />
      <Hero />
      <MidScene />
      <SpringScene />
      <Footer />
      <div className="hk-grain" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 50, pointerEvents: 'none', opacity: 0.9 }} />
    </div>
  )
}

export default App
