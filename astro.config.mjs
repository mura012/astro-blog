import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // npx astro ○○でここに自動で追加してくれている。
  integrations: [tailwind(), preact()],
});
