import React, { JSX } from 'react'
import articles from '../data/articlesData';
import ReadMoreBtn from '../components/ReadMoreBtn';
import { Outlet } from 'react-router-dom';


function HomePage() {
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
                <article key={key} className='article' style={styles.pickUp}>
                    <img src={`${data.img}`} alt=''></img>
                    <p className='articleTitle' style={styles.pickUpTitle}>
                        {data.title}
                    </p>
                    <ReadMoreBtn articleId={articleId} />
                </article>;
            pickUpArticles.push(pickUpArticle);
        }));
        return pickUpArticles;
    }


    return (
        <main>
            <section id='pickUpArea' style={styles.pickUpArea}>
                {pickUpArticles([0, 1, 2])}
            </section>
            <section id="mainArea">
                <Outlet />
            </section>
        </main>
    )
}

const styles = {
    pickUpArea: {
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "70px"
    },
    pickUp: {
        width: "32%"
    },
    pickUpTitle: {
        height: "45px",
        overflow: "hidden"
    }
}

export default HomePage
