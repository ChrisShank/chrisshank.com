import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import { viridiVitePlugin } from 'viridi';

export default defineConfig({
  plugins: [
    vuePlugin({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('orbit-'),
        },
      },
    }),
    viridiVitePlugin({
      directory: 'src/notes',
    }),
  ],
});
