// Photos are served as plain static files from /public/photos so they load on any host (Vercel, Lovable, etc).
export type Photo = { src: string; srcSet: string; width: number; height: number };

const mk = (name: string, w: number, h: number): Photo => {
  const md = `/photos/${name}-md.webp`;
  const hd = `/photos/${name}-hd.webp`;
  return { src: hd, srcSet: `${md} ${w}w, ${hd} ${w * 2}w`, width: w * 2, height: h * 2 };
};

export const photos = {
  stage: mk("heer1", 720, 540),
  birthday: mk("heer2", 720, 949),
  ceiling: mk("heer3", 765, 1020),
  mandap: mk("heer4", 765, 1020),
  roses: mk("heer7", 889, 1020),
};
