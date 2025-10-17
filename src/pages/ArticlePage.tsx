import React from 'react'
import { useLocation } from 'react-router-dom'
import articles from '../data/articlesData';

function ArticlePage() {
    const currentPath = useLocation().pathname;
    const articleId = Number(currentPath.split("/").pop());
    const data: {
            title: string;
            main: string;
            date: string;
            category: string;
            img: string;
        } = articles[articleId];

    return (
        <main>
            <h2 className='articleTitle' style={styles.articleTitle}>{data.title}</h2>
            <img src={`${data.img}`} alt="" />
            <div className='articleMain' style={styles.articleMain}>{data.main}</div>
        </main>
    )
}

const styles = {
    articleTitle: {
        marginBottom: "15px",
        paddingLeft: "10px",
        fontSize: "1.5rem"
    },
    articleMain: {
        maxWidth: "960px",
        margin: "0 auto",
        padding: "10px 5px 30px 5px",
        fontSize: "1.2rem"
    }
}

export default ArticlePage
