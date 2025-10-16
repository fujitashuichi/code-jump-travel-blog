import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Footer() {
    const Section = styled.section`
        ${{ ...styles.Section }}
    `
    const Title = styled.h3`
        ${{ ...styles.Title }}
    `
    const MenuLi = styled.li`
        ${{ ...styles.MenuLi }}
    `


    return (
        <footer id='footer'>
            <div style={styles.inner}>
                <Section id='about'>
                    <Title>About</Title>
                    <p style={styles.p}>テキストテキストテキストテキストテキストテキストテ キストテキストテキストテキスト テキストテキストテ キストテキストテキストテキストテキストテキストテキ ストテキスト テキストテキストテキストテキストテキ ストテキストテキストテキストテキストテキスト</p>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className='Link'>プロフィール詳細</Link>
                            </li>
                            <li>
                                <Link to="/" className='Link'>お仕事の依頼</Link>
                            </li>
                            <li>
                                <Link to="/" className='Link'>お問い合わせ</Link>
                            </li>
                        </ul>
                    </nav>
                </Section>
                <Section id='menu'>
                    <Title>Menu</Title>
                    <ul>
                        <MenuLi>
                            <Link to="/" className='Link'>NEW</Link>
                        </MenuLi>
                        <MenuLi>
                            <Link to="/" className='Link'>CATEGORY</Link>
                        </MenuLi>
                        <MenuLi>
                            <Link to="/" className='Link'>COLUMN</Link>
                        </MenuLi>
                        <MenuLi>
                            <Link to="/" className='Link'>SERIES</Link>
                        </MenuLi>
                        <MenuLi>
                            <Link to="/" className='Link'>Q&A</Link>
                        </MenuLi>
                    </ul>
                </Section>
                <Section id='X'>
                    <Title>X</Title>
                    <div id='XContainer'>
                        X
                    </div>
                </Section>
            </div>
            <div id='copyRight'>
                <p>© Travel & Blog</p>
            </div>
        </footer>
    )
}

const styles = {
    inner: {
        display: "flex",
        maxWidth: "1200px",
        justifyContent: "space-between",
        margin: "0 auto",
        padding: "55px 0"
    },
    Section: {
        width: "30%"
    },
    Title: {
        marginBottom: "35px",
        fontSize: "1.2rem"
    },
    p: {
        marginBottom: "15px"
    },
    MenuLi: {
        padding: "20px",
        borderTop: "1px solid #ccc",
        borderBottom: "1px solid #ccc"
    },
    X: {
        width: "100%",
        height: "100%",
        overflowY: "scroll"
    }
}

export default Footer
