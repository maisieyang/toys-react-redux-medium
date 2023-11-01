import requests from './agent';

const Tags = {
    /**
     * Get all tags
     *
     * @returns {Promise<Tags>}
     */
    getAll: () => requests.get('/tags'),
  };



  export default Tags;