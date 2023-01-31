/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#ffe3e7',
                    100: '#ffe3e7',
                    200: '#ffc5cd',
                    300: '#ffa2af',
                    400: '#ff7d8f',
                    500: '#ff5d74',
                    600: '#ff3c58',
                    700: '#eb1d3a',
                    800: '#b71835',
                    900: '#a01237',
                },
                gray: {
                    50: '#e8e8ea',
                    100: '#e8e8ea',
                    200: '#c3c3c9',
                    300: '#a3a3ac',
                    400: '#81818d',
                    500: '#5e5e6e',
                    600: '#3b3b4e',
                    700: '#19192f',
                    800: '#141421',
                    900: '#10101b',
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}