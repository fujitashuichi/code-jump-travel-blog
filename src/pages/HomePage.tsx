import React, { JSX } from 'react'
import styled from 'styled-components'
import articles from '../data/articlesData';
import ReadMoreBtn from '../components/ReadMoreBtn';


function HomePage() {
    const Article = styled.article`
        ${{ ...styles.Article }}
    `

    const pickUpArticles = (articleIds: number[]) => {
        let pickUpArticles: JSX.Element[] = [];
        articleIds.forEach(((articleId, key) => {
            const data: {
                    title: string;
                    main: string;
                    date: string;
                    category: string;
                    img: string;
                } = articles[articleId];

            const pickUpArticle: JSX.Element =
                <Article key={key} className='article' style={styles.pickUp}>
                    <img src={`${data.img}`} alt=''></img>
                    <p className='articleTitle' style={styles.pickUpTitle}>
                        {data.title}
                    </p>
                    <ReadMoreBtn articleId={articleId} />
                </Article>;
            pickUpArticles.push(pickUpArticle);
        }));
        return pickUpArticles;
    }


    return (
        <main>
            <section id='pickUpArea' style={styles.pickUpArea}>
                {pickUpArticles([0, 1, 2])}
            </section>
            <section id="mainArea"></section>
        </main>
    )
}

const styles = {
    Article: {

    },
    pickUpArea: {
        display: "flex",
        justifyContent: "space-between"
    },
    pickUp: {
        width: "32%"
    },
    pickUpTitle: {
        height: "45px"
    }
}

export default HomePage
