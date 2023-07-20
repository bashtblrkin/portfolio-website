/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
import theme from "tailwindcss/defaultTheme";

module.exports = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './sections/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        container: {
            center: true
        },
        extend: {
            colors: {
                'grey': '#EACDC2',
                'darkBlue': '#151030',
                'black': '#1A1423',
                'violet': '#915EFF',
                'pink': '#C3296A',
                'green': '#00C7A3',
                'yellow': '#C1CE2C'
            }
        },
        backgroundImage: {
            'main-pattern': 'url(/images/main_bg.png)'
        }
    },
    plugins: [
        plugin(({addUtilities, addComponents}) => {
            addUtilities({
                '.paddingX': {
                    paddingRight: '1.25rem',
                    paddingLeft: '1.25rem',
                    [`@media (min-width: ${theme.screens.md})`]: {
                        paddingRight: '4rem',
                        paddingLeft: '4rem',
                    },
                },
                '.black-gradient': {
                    background: 'linear-gradient(to right, #434343, #000000)'
                },
                '.violet-gradient': {
                    background: 'linear-gradient(180deg, #915EFF 0%, rgba(217, 217, 217, 0.00) 100%)'
                }
            })
            addComponents({
                '.header': {
                    fontSize: '60px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                },
                '.subHeader': {
                    color: '#FFF',
                    fontSize: '26px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                },
                '.text': {
                    color: 'grey',
                    fontSize: '18px',
                    fontWeight: '400px'
                },
                '.card': {
                    border: 'solid 1px transparent',
                    borderImage: 'linear-gradient(#915EFF, #00C7A3)',
                    borderRadius: '1.25rem',
                    background: 'black'
                }
            })
        })
    ],
}
