/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // Ensure it includes your components
      "./.storybook/**/*.{js,ts,jsx,tsx,mdx}", // Add Storybook files
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  