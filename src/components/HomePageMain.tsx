import React, { JSX } from 'react'
import articles from '../data/articlesData'
import ReadMoreBtn from './ReadMoreBtn';
import { getRankedArticleId } from '../data/articleRankingData';
import FormatWeekday from '../data/formatWeekday';
import styled from 'styled-components';


function HomePageMain() {
    // 新しい順に並べる
    const reversedArticles = [...articles].reverse();

    const mainArticles = (articleCount: number) => {
        let mainArticles: JSX.Element[] = [];
        for (let i=0; i < articleCount; i++) {
            const data = reversedArticles[i];
            const mainArticle: JSX.Element =
                <article key={i}>
                    <h2 className='articleTitle' style={styles.articleTitle}>{data.title}</h2>
                    <div style={{ display: "flex", padding: "10px 0", fontSize: "0.8rem" }}>
                        <time style={{ marginRight: "30px" }}>{data.date}</time>
                        <div>{data.category}</div>
                    </div>
                    <img src={`${data.img}`} alt=''></img>
                    <p className='articleMain' style={styles.articleMain}>
                        {data.main}
                    </p>
                    <ReadMoreBtn articleId={i} />
                </article>
            mainArticles.push(mainArticle);
        }
        return mainArticles;
    }


    const rankingArticles = (articleCount: number) => {
        let rankingArticles: JSX.Element[] = [];
        for (let rank=1; rank <= articleCount; rank++ ) {
            const data = articles[getRankedArticleId(rank)];
            const rankingArticle: JSX.Element =
                <article key={rank - 1} style={{ marginBottom: "30px" }}>
                    <img src={`${data.img}`} alt="" />
                    <p>{data.title}</p>
                </article>
            rankingArticles.push(rankingArticle);
        }
        return rankingArticles;
    }


    const archiveList = (archiveCount: number) => {
        const archiveList: JSX.Element[] = [];
        for (let i=0; i < archiveCount; i++) {
            try {
                const data = reversedArticles[i];
                const li: JSX.Element =
                    <li key={i} style={styles.archiveLi}>
                        <time><>{data.date}</><>{`(${FormatWeekday.fromDate(data.date, "JP_1char")})`}</></time>
                        <p style={styles.archiveTitle}>{data.title}</p>
                    </li>
                archiveList.push(li);
            } catch (e) {
                console.error(e + `\nアーカイブが${archiveCount}個に達していない時このエラーが出ることがあります`);
                break;
            }
        }
        return archiveList;
    }


    const H3 = styled.h3`
        ${{ ...styles.H3 }}
    `


    return (
        <div id='container' style={styles.container}>
            <section id='mainArea' style={styles.mainArea}>
                {mainArticles(3)}
            </section>
            <section id='asideArea' style={styles.asideArea}>
                <div id="author" style={{ marginBottom: "60px" }}>
                    <div className="imgWrapper" style={styles.imgWrapper}>
                        <img src="/img/author.jpg" alt="" style={styles.authorImg} />
                    </div>
                        <H3 id='authorName'>Name Name</H3>
                        <p id='authorMessage'>
                            プロフィールテキストテキストテキストテキストテキ ストテキストテキストテキストテキストテキストテキ ストテキストテキストテキストテキストテキストテキ ストテキストテキストテキストテキストテキストテキ ストテキストテキスト
                        </p>
                </div>
                <div id="ranking" style={{ marginBottom: "60px" }}>
                    <H3 id='ranking'>Ranking</H3>
                    {rankingArticles(3)}
                </div>
                <div id='Archive'>
                    <H3 id='archive'>Archive</H3>
                    <ul style={{ borderBottom: "1px solid #777" }}>
                        {archiveList(20)}
                    </ul>
                </div>
            </section>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        width: "100%",
        marginBottom: "140px"
    },
    mainArea: {
        width: "60%",
    },
    articleTitle: {
        padding: "10px 0"
    },
    articleMain: {
        height: "70px",
        padding: "0 50px"
    },
    asideArea: {
        width: "40%",
        marginBottom: "40px",
        padding: "30px 15px 15px 50px"
    },
    imgWrapper: {
        width: "130px",
        height: "130px",
        margin: "0 auto"
    },
    authorImg: {
        borderRadius: "50%"
    },
    H3: {
        width: "fit-content",
        margin: "0 auto",
        padding: "35px 0"
    },
    archiveLi: {
        display: "flex",
        padding: "25px",
        fontSize: "0.8rem",
        borderTop: "1px solid #777",
        borderSpacing: 0
    },
    archiveTitle: {
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        paddingLeft: "10px"
    }
}

export default HomePageMain
