import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';


export default function Home() {
    const themeMap = {
        0: {
            name: 'Solarized',
            bg_hex: '#002b36',
            txt_hex: '#839496',
            h1_hex: '#dc322f',
            h2_hex: '#cb4b16',
            h3_hex: '#b58900',
        },
        1: {
            name: 'Rose-Pine',
            bg_hex: '#1e1d2f',
            txt_hex: '#ffffff',
            h1_hex: '#ff66c4',
            h2_hex: '#e956a7',
            h3_hex: '#c84a94',
        },
        2: {
            name: 'Monokai',
            bg_hex: '#272822',
            txt_hex: '#f8f8f2',
            h1_hex: '#a6e22e',
            h2_hex: '#a6e22e',
            h3_hex: '#a6e22e',
        },
        3: {
            name: 'VSCode',
            bg_hex: '#1e1e1e',
            txt_hex: '#d4d4d4',
            h1_hex: '#9cdcfe',
            h2_hex: '#569cd6',
            h3_hex: '#c586c0',
        },
        4: {
            name: 'Dracula',
            bg_hex: '#282a36',
            txt_hex: '#f8f8f2',
            h1_hex: '#ff79c6',
            h2_hex: '#8be9fd',
            h3_hex: '#bd93f9',
        },
        5: {
            name: 'Material Dark',
            bg_hex: '#263238',
            txt_hex: '#c3e88d',
            h1_hex: '#80cbc4',
            h2_hex: '#66bb6a',
            h3_hex: '#ef5350',
        },
        6: {
            name: 'GitHub Dark',
            bg_hex: '#1e2227',
            txt_hex: '#ffffff',
            h1_hex: '#6cc644',
            h2_hex: '#f1e05a',
            h3_hex: '#fbca04',
        },
        7: {
            name: 'Tomorrow Night',
            bg_hex: '#1d1f21',
            txt_hex: '#c5c8c6',
            h1_hex: '#81a2be',
            h2_hex: '#b5bd68',
            h3_hex: '#de935f',
        },
    };
    const [currTheme, setCurrTheme] = useState(0);
    const [bgColor, setBgColor] = useState('#000000');
    const [textColor, setTextColor] = useState('#000000');
    const [h1Color, setH1Color] = useState('#000000');
    const [h2Color, setH2Color] = useState('#000000');
    const [h3Color, setH3Color] = useState('#000000');
    
    const getNextTheme = () => {
        const nextTheme = (currTheme + 1) % Object.keys(themeMap).length;
        setCurrTheme(nextTheme);
        return themeMap[nextTheme];
    };

    const changeColor = (theme) => {
        setBgColor(theme.bg_hex);
        setTextColor(theme.txt_hex);
        setH1Color(theme.h1_hex);
        setH2Color(theme.h2_hex);
        setH3Color(theme.h3_hex);
    };
    const getRandomTheme = () => {
        const themeKeys = Object.keys(themeMap);
        const randomIndex = Math.floor(Math.random() * themeKeys.length);
        return themeMap[randomIndex];
    };

    useEffect(() => {
        changeColor(getRandomTheme());
        changeColor(getNextTheme());
    }, []); // Run the effect only once, on component mount

    return (
        <div className={styles.container} style={{ 
            backgroundColor: bgColor,
                color: textColor}
        }>
        <Head>
        <title>Chris' blog</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
            .${styles.title} {
                --h1-color: ${h1Color};
            }
            `}</style>
        </Head>

        <main>
        <h1 className={styles.h1}>Ramblings</h1>
        <h2 className={styles.h2}>Subheading</h2>
        <h3 className={styles.h3}>Sub-subheading</h3>

        <p className={styles.description}>
        Ramblings about anything that I found particularly interesting.
        Expect a lot of talk about tech.
        </p>

        <div className={styles.grid}>
        <a
        href="./posts/hello-world"
        className={styles.card}
        >
        <h3 className={styles.title}>Hello World &rarr;</h3>
        <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </p>
        </a>
        </div>
        </main>

        <footer>
        <button className={styles.changeColorButton} onClick={() => changeColor(getNextTheme())}>
        Change Background Color
        <br />
        Current theme: {themeMap[currTheme].name}
        </button>
        </footer>

        <style jsx>{`
            main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            footer img {
                margin-left: 0.5rem;
            }
            footer a {
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                color: inherit;
            }
            code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
            }
            `}</style>

        <style jsx global>{`
            html,
            body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
            }
            * {
                box-sizing: border-box;
            }
            .${styles.title} {
                color: ${h1Color};
            }
            .${styles.h1} {
                color: ${h1Color};
            }
            .${styles.h2} {
                color: ${h2Color};
            }
            .${styles.h3} {
                color: ${h3Color};
            }
            .${styles.changeColorButton} {
                background-color: ${bgColor};
                color: ${textColor};
                padding: 0.5rem 1rem;
                font-size: 1rem;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            .${styles.changeColorButton}:hover {
                background-color: ${h1Color + "33"};
            }

            .${styles.card} {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: ${textColor};
                text-decoration: none;
                border: 1px solid ${h1Color}
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease, background-color 0.3s ease;
            }

        .${styles.card}:hover, .${styles.card}:focus, .${styles.card}:active {
            background-color: ${h1Color + "33"};
            border-color: ${h2Color};
            `}</style>
        </div>
    )
}

