const rankingData = [
    // articleId
    3,
    4,
    5,
    0,
    1,
    2
];


const getRankedArticleId = (rank: number) => {
    const id = rankingData[rank - 1];
    return id;
}


export { rankingData, getRankedArticleId };
