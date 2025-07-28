/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        fira: ["Fira Code", "monospace"]
      },
      colors: {
        bgColor: "#000000",
      
    
        whiteText: "#ffffff",
        lightGray: "#d1d5db",     
        grayText: "#9ca3af",     
        mediumGray: "#6b7280",    
        darkGray: "#4b5563",      
        darkerGray: "#111827", 

        bgWhite: "#ffffff",      
        bgLightestGray: "#f3f4f6",
        bgGray700: "#374151",    
        bgGray800: "#1f2937",     
        bgGray900: "#111827",     
        bgSuccess: "#059669",     
      }
      
    },
  },
  plugins: [],
};
