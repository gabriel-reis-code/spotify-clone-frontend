import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './public/*',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backdropBlur: {
        'blur-large': 'backdrop-filter: blur(100px)'
      },
      backgroundColor: {
        'grey-spotify': "#252525",
        'green-spotify': "#1DB954",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'login-image': "url('/LoginBackgroundImage.png')",
      },
    },
  },
  plugins: [],
}
export default config
