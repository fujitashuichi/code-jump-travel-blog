import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
    const Inner = styled.div`
        ${{ ...styles.Inner }}
    `;
    const Li = styled.li`
        ${{ ...styles.Li }}
    `;

    return (
        <header id="header">
            <Inner style={{ padding: "20px 15px" }}>
                <h1 className='siteTitle' style={styles.siteTitle}>
                    <Link to="/" className='Link'>
                        <img src='/img/logo.svg' alt='Travel Blog' />
                    </Link>
                </h1>
            </Inner>
            <nav id='globalNav' style={styles.globalNav}>
                <Inner>
                    <ul style={styles.ul}>
                        <Li><Link to="/" className='Link'>NEW</Link></Li>
                        <Li><Link to="/" className='Link'>COLUMN</Link></Li>
                        <Li><Link to="/" className='Link'>SERIES</Link></Li>
                        <Li><Link to="/" className='Link'>Q&A</Link></Li>
                        <Li><Link to="mailto:company@example.co?subject=Contact" className='Link'>CONTACT</Link></Li>
                    </ul>
                </Inner>
            </nav>
        </header>
    )
}

const styles = {
    siteTitle: {
        width: "145px",
        height: "30px",
        lineHeight: 1.5
    },
    Inner: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 15px"
    },
    globalNav: {
        padding: "12px 0",
        background: "#000"
    },
    ul: {
        display: "flex",
        columnGap: "60px"
    },
    Li: {
        fontSize: "0.9rem",
        color: "#fff"
    }
}

export default Header
