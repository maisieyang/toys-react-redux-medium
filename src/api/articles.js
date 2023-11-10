import requests from './agent';


const articles = {
    /**
     * Get all articles
     *
     * @param {Object} query Article's query parameters
     * @param {Number} [query.limit=10]
     * @param {Number} [query.page]
     * @param {String} [query.author]
     * @param {String} [query.tag]
     * @param {String} [query.favorited]
     * @returns {Promise<ArticlesResponse>}
     */
    all: (query) => requests.get(`/articles`, query),
    /**
     * Get all articles from author
     *
     * @param {String} author Article's author
     * @param {Number} [page]
     * @returns {Promise<ArticlesResponse>}
     */
    byAuthor: (author, page) =>
      requests.get(`/articles`, { author, limit: 5, page }),
    /**
     * Get all articles by tag
     *
     * @param {String} tag Article's tag
     * @param {Number} page
     * @returns {Promise<ArticlesResponse>}
     */
    byTag: (tag, page) => requests.get(`/articles`, { tag, page }),
    /**
     * Remove one article
     *
     * @param {String} slug Article's slug
     * @returns {Promise<{}>}
     */
    del: (slug) => requests.del(`/articles/${slug}`),
    /**
     * Favorite one article
     *
     * @param {String} slug Article's slug
     * @returns {Promise<ArticleResponse>}
     */
    favorite: (slug) => requests.post(`/articles/${slug}/favorite`),
    /**
     * Get article favorited by author
     *
     * @param {String} username Username
     * @param {Number} [page]
     * @returns {Promise<ArticlesResponse>}
     */
    favoritedBy: (username, page) =>
      requests.get(`/articles`, { favorited: username, limit: 5, page }),
    /**
     * Get all articles in the user's feed
     *
     * @param {Number} [page]
     * @returns {Promise<ArticlesResponse>}
     */
    feed: (page) => requests.get('/articles/feed', { page }),
    /**
     * Get one article by slug
     *
     * @param {String} slug Article's slug
     * @returns {Promise<ArticleResponse>}
     */
    get: (slug) => requests.get(`/articles/${slug}`),
    /**
     * Unfavorite one article
     *
     * @param {String} slug Article's slug
     * @returns {Promise<ArticleResponse>}
     */
    unfavorite: (slug) => requests.del(`/articles/${slug}/favorite`),
    /**
     * Update one article
     *
     * @param {Partial<Article>} article
     * @returns {Promise<ArticleResponse>}
     */
    update: ({ slug, ...article }) =>
      requests.put(`/articles/${slug}`, { article }),
    /**
     * Create a new article
     *
     * @param {Object}   article
     * @param {String}   article.title
     * @param {String}   article.description
     * @param {String}   article.body
     * @param {String[]} article.tagList
     * @returns {Promise<ArticleResponse>}
     */
    create: (article) => requests.post('/articles', { article }),
  };

  export default articles;