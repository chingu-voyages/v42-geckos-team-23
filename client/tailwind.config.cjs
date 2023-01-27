/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html', 
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                'nunito': ['Nunito', 'sans-serif']
            }
        },
    },
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        themes: [
            {
                mytheme: {

                    "primary": "#FC0706",

                    "secondary": "#F000B8",

                    "accent": "#37CDBE",

                    "neutral": "#4046",

                    "base-100": "#FFFFFF",

                    "info": "#3ABFF8",

                    "success": "#36D399",

                    "warning": "#FBBD23",

                    "error": "#F87272",
                },
            },
        ],
      },
}
