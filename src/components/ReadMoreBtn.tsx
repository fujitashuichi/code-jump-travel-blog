import React from 'react'
import { Link } from 'react-router-dom'

interface ArticleProps {
    articleId: number
}

function ReadMoreBtn({ articleId }: ArticleProps) {
    return (
        <div className='readMoreBtn'>
            <Link to={`/article/${articleId}`} className='Link'>READ MORE</Link>
        </div>
    )
}

export default ReadMoreBtn
