/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                stefto: {
                    blue: "#003366",
                    dark: "#001F3F",
                    red: "#FF0000",
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['"Plus Jakarta Sans"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
