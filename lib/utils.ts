// lib/utils.ts
export function getAssetPath(path: string): string {
  // 移除开头的斜杠，避免双斜杠
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // GitHub Pages 需要 basePath，Vercel 不需要
  const basePath = process.env.NODE_ENV === 'production' ? '/nextjs-blog' : '';
  
  return `${basePath}/${cleanPath}`;
}
