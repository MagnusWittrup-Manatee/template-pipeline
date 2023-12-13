/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly TARGET: "friluft" | "nordisk";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
