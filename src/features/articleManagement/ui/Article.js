import React from 'react';
import ArticleList from './ArticleList';
import ArticleTab  from './ArticleTab';


function Article() {
    return (
        <div className="col-md-9">
            <ArticleTab />
            <ArticleList />
        </div>
    );
}

export default Article;