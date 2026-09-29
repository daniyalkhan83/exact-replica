import h1hd from "@/assets/heer1-hd.webp.asset.json";
import h1md from "@/assets/heer1-md.webp.asset.json";
import h2hd from "@/assets/heer2-hd.webp.asset.json";
import h2md from "@/assets/heer2-md.webp.asset.json";
import h3hd from "@/assets/heer3-hd.webp.asset.json";
import h3md from "@/assets/heer3-md.webp.asset.json";
import h4hd from "@/assets/heer4-hd.webp.asset.json";
import h4md from "@/assets/heer4-md.webp.asset.json";
import h7hd from "@/assets/heer7-hd.webp.asset.json";
import h7md from "@/assets/heer7-md.webp.asset.json";

export type Photo = { src: string; srcSet: string; width: number; height: number };

const mk = (md: { url: string }, hd: { url: string }, w: number, h: number): Photo => ({
  src: hd.url,
  srcSet: `${md.url} ${w}w, ${hd.url} ${w * 2}w`,
  width: w * 2,
  height: h * 2,
});

export const photos = {
  stage: mk(h1md, h1hd, 720, 540),
  birthday: mk(h2md, h2hd, 720, 949),
  ceiling: mk(h3md, h3hd, 765, 1020),
  mandap: mk(h4md, h4hd, 765, 1020),
  roses: mk(h7md, h7hd, 889, 1020),
};
