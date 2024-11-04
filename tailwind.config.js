/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-background-home': "url('./assets/home/background-home-mobile.jpg')",
        'tablet-background-home' : 'url("./assets/home/background-home-tablet.jpg")',
        'desktop-background-home' : 'url("./assets/home/background-home-desktop.jpg")',
        'mobile-background-destination' : 'url("./assets/destination/background-destination-mobile.jpg")',
        'tablet-background-destination' : 'url("./assets/destination/background-destination-tablet.jpg")',
        'desktop-background-destination' : 'url("./assets/destination/background-destination-desktop.jpg")',
        'mobile-background-crew' : 'url("./assets/crew/background-crew-mobile.jpg")',
        'tablet-background-crew' : 'url("./assets/crew/background-crew-tablet.jpg")',
        'desktop-background-crew' : 'url("./assets/crew/background-crew-desktop.jpg")',
        'mobile-background-technology' : 'url("./assets/technology/background-technology-mobile.jpg")',
        'tablet-background-technology' : 'url("./assets/technology/background-technology-tablet.jpg")',
        'desktop-background-technology' : 'url("./assets/technology/background-technology-desktop.jpg")'
      },
      fontFamily:{
        'barlowC': ['Barlow Condensed'],
        'bellefair': ['Bellefair'],
        'barlow': ['Barlow']
      }
    },
    screens: {
      'md': '768px',
      'lg': '1440px',
    }
  },
  plugins: [],
}

