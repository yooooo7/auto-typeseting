const styleList = [
    {
        '.container': {
            margin: '0 2rem'
        }
    },
    {
        'h2': {
            fontSize: '20px',
            fontWeight: 'normal',
            color: '#333',
            padding: 0,
            margin: '5.6rem 0 1rem',
            textAlign: 'center'
        }
    },
    {
        '.line': {
            width: '4rem',
            height: '0',
            overflow: 'hidden',
            borderBottom: '2px solid rgba(66, 185, 131, .9)',
            margin: '0 auto 2.2rem'
        }
    },
    {
        'p': {
            fontSize: "14px",
            textAlign: "justify",
            lineHeight: "1.5rem",
            color: "#666",
            padding: 0,
            margin: "0 0 2.2rem"
        }
    },
    {
        'strong': {
            color: "#333",
            fontWeight: "normal",
            borderBottom: "1px solid rgba(66, 185, 131, .9)"
        }
    },
    {
        'blockquote': {
            padding: "16px 40px",
            margin: 0,
            backgroundColor: "rgba(66, 185, 131, .1)",
            border: "none"
        }
    },
    {
        'blockquote > p': {
            margin: "0.2rem"
        }
    }
]

class Style {
    constructor () {
        this.list = styleList
    }

    addDom ($) {
        const headerLine = '<section class="line">.</section>'
        $('h2').after(headerLine)
    }
}

module.exports = Style