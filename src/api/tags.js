import requests from './agent';

const tags = {
    /**
     * Get all tags
     *
     * @returns {Promise<Tags>}
     */
    getAll: () => requests.get('/tags'),
  };



  export default tags;