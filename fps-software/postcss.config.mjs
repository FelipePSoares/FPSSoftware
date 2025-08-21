const config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // adjust paths for your project
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1e3a5f',
        'primary-blue': '#4a90e2',
        'secondary-blue': '#87ceeb',
        'light-blue': '#b8e0f5',
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;