const EXCERPT_CHARS = 320;

/** Plain-text opening of a Markdown body, cut at a word boundary. */
export function excerpt(markdown: string, maxChars = EXCERPT_CHARS): string {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/[*_`~\\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= maxChars) return text;
  const cut = text.slice(0, maxChars);
  const lastSpace = cut.lastIndexOf(' ');
  return cut.slice(0, lastSpace > 0 ? lastSpace : maxChars).replace(/[,;:.!?]+$/, '') + '…';
}
