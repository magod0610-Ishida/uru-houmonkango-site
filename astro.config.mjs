import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    server: {
      // トンネル（localtunnel／Cloudflare Tunnelなど）経由でのアクセスを許可する設定。
      // 外部の一時公開URL経由でも開発サーバーが応答できるようにするためのもの。
      allowedHosts: true,
    },
  },
});
