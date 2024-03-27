import { THEME } from "./constants";

export function setTheme(theme) {
  document.body.style.setProperty("--brand-1", THEME[theme].brand1);
  document.body.style.setProperty("--brand-2", THEME[theme].brand2);
  document.body.style.setProperty("--img-hue-rotate", THEME[theme].hueRotate);
}
