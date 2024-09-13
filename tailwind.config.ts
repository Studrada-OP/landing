import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                jura: ['Jura', 'sans-serif'],
                kharkiv: ['KharkivTone', 'sans-serif'],
            },
            colors: {
                almostBlack: '#0B0B0B',
                gray: '#292929',
            },
        },
    },
    plugins: [],
};
export default config;
