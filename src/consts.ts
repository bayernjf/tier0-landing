// Site-wide constants. No human-facing copy here — that lives in src/i18n/ui.ts.
export const SITE_URL = "https://tier0.bayjf.com";
export const SITE_NAME = "Tier 0";
export const AUTHOR = "bayernjf";

export const SOCIAL = {
  github: "https://github.com/bayernjf/tier0-landing",
  email: "b4yernjf@gmail.com",
};

// Friendly contact links (mailto, no form).
export const CONTACT = {
  partner: `mailto:${SOCIAL.email}?subject=${encodeURIComponent("Tier 0 partnership")}`,
  waitlist: `mailto:${SOCIAL.email}?subject=${encodeURIComponent("Tier 0 waitlist")}`,
};

export const BRAND_MARK = "/brand/tier0-mark.svg";

// Playwright renders dist/preview-{en,zh}.png during build (scripts/shot.mjs).
export const OG_IMAGE = {
  en: "/preview-en.png",
  zh: "/preview-zh.png",
} as const;
export const OG_IMAGE_SIZE = { width: 1280, height: 800 } as const;
