/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

module.exports = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
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
                'red': '#C3296A',
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
            addComponents({

                '.header': {
                    color: '#FFF',
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
