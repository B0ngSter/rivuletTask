module.exports = {
    mode: 'jit',
    purge: [
    // ...
    ],
    variants: {
      extend: {
        backgroundColor: ['checked']
      }
    },
    theme: {
        screens: {
            'tablet': '640px',
            'smlaptop': '1024px',
            'bglaptop': '1280px'
        },
        extend: {
            spacing: {
              '100': '52rem',
              '101': '5.5rem'
            }
        },
        backgroundColor: theme => ({
            transparent: 'transparent',
            redish: '#E52B20',
            yellowish: '#FFBF2F',
            DarkBlue: '#211B4E',
            hoverBlue: '#000427',
            activeBlue: '#1a2374',
            blueish: '#575BDE',
            hardBlue: '#110F24',
            white: 'white',
            greenish: '#63CE63',
            gray: {
            100: '#CCCED0',
            200: '#ECECEE',
            300: '#F6F6F9'
            }
        }),
        color: {
            redish: '#E52B20',
            yellowish: '#FFBF2F',
            DarkBlue: '#211B4E',
            blueish: '#575BDE',
            hardBlue: '#110F24',
            greenish: '#63CE63',
            gray: {
                    100: '#FFFFFF',
                    200: '#ECECEE',
                    300: '#F6F6F9',
                    400: '#110f24;'
                }
            }
        },
        fontFamily: {
            sans: ['Lato', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
}
