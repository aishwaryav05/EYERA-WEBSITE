import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: '/EYERA-WEBSITE/', 
=======
>>>>>>> ba1a24fe885b429793709be02c685680196e8768
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
