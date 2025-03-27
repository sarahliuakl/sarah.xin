/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
         // Set Inter as the default sans-serif font
         sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
         // Keep Playfair Display as the serif/heading font
         serif: ['"Playfair Display"', 'Georgia', 'serif'],
       },
       colors: {
         // Adjusted pink palette (keeping previous adjustments)
         pink: {
           50: '#fff1f3',
           100: '#ffe4e9',
           200: '#fecdd8',
           300: '#fda4ba',
           400: '#fb7199',
           500: '#f43f6e',
           600: '#e11d5a',
           700: '#be124c',
           800: '#9f1240',
           900: '#88133a',
           950: '#4c051e',
         },
         // Complementary soft purple (optional)
         purple: {
           50: '#faf5ff',
           100: '#f3e8ff',
           200: '#e9d5ff',
         },
         // Adjusted gray (keeping previous adjustments)
         gray: {
           50: '#f9fafb',
           100: '#f3f4f6',
           200: '#e5e7eb',
           300: '#d1d5db',
           400: '#9ca3af',
           500: '#6b7280',
           600: '#4b5563',
           700: '#374151',
           800: '#1f2937',
           900: '#111827',
         }
       },
       lineHeight: {
         'extra-loose': '2',
       }
    },
  },
  plugins: [
     require('@tailwindcss/typography'),
     require('@tailwindcss/line-clamp'),
  ],
}
