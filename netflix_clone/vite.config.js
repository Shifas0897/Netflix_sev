// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base:"/Netflix_sev/",
  plugins: [react()],


})
;// vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   root: './src', // Adjust if necessary
//   base: '/Netflix_sev/', // Adjust if necessary
//   build: {
//     rollupOptions: {
//       input: {
//         main: './src/main.jsx', // Adjust the path as needed
//       },
//     },
//   },
// });