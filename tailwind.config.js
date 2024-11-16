/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'custom-grey':'rgba(66, 81, 102, 1)',
        'custom-blue':'rgba(64, 121, 237, 1)',
        'custom-summary-1': 'rgba(255, 226, 229, 1)',
        'custom-summary-2': 'rgba(255, 244, 222, 1);',
        'custom-summary-3': 'rgba(220, 252, 231, 1)',
        'custom-summary-4': 'rgba(243, 232, 255, 1)',
        'custom-orange':'rgba(243, 148, 30, 1)',
        'custom-border-blue':'rgba(25, 123, 189, 1)',
        'custom-transaction-text-blue':'rgba(113, 142, 191, 1)',
        'custom-bar-color-1':'rgba(0, 149, 255, 1)',
        'custom-bar-background-1':'rgba(205, 231, 255, 1)',
        'custom-bar-color-2':'rgba(0, 224, 150, 1)',
        'custom-bar-background-2':'rgba(140, 250, 199, 1)',
        'custom-bar-color-3':'rgba(136, 77, 255, 1)',
        'custom-bar-background-3':'rgba(197, 168, 255, 1)',
        'custom-bar-color-4':'rgba(255, 143, 13, 1)',
        'custom-bar-background-4':'rgba(255, 213, 164, 1)',
      }
    },
  },
  plugins: [],
}