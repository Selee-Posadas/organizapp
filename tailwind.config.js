
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {

       background: "var(--color-bg)",
        surface: "var(--color-surface)",
        brutal: {
          text: "var(--color-text)",
          border: "var(--color-border)",
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          tertiary: "var(--accent-tertiary)",
          danger: "var(--accent-danger)",
        },

      },

      borderRadius: {
        'brutal': '16px', 
      },
      borderWidth: {
        '3': '3px',
      }
    },

    fontFamily: {
        heading: ["Inter_700Bold", "sans-serif"],
        body: ["Inter_400Regular"],
        technical: ["SpaceMono_400Regular", "monospace"],
      },
  },
  plugins: [],
};
