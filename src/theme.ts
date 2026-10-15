// Shared palette for the Hacktober landing page.
// Source: design handoff README (hacktober-landing.zip), "Theme tokens" table.
export const COLORS = {
  // Shared with the spring closing scene
  night: '#0C1230', // ground / page background
  dusk: '#23225A', // sky
  lantern: '#FFC55A', // accent
  glow: '#FFE2A0',
  parchment: '#F3E6D0', // headline text

  // Fall only
  ember: '#DC742E',
  rust: '#B4502B',
  maple: '#7C2B3B',
  ochre: '#DDA544',
  plumDusk: '#5A2F58',

  // Spring handoff (closing scene)
  cobalt: '#1C3FA6',
  trailBlue: '#2A4BB0',
  starlight: '#FFF3D6',

  // Text + silhouettes
  body: '#D9D3E6',
  caption: '#B9B4CF',
  trunk: '#070A1E',
} as const
